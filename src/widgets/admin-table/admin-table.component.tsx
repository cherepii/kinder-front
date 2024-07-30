import trash from '@public/assets/images/trash.png'
import { API_URL, instance } from '@shared/api'
import { type IFile, statusesColorMap, statusesMap } from '@shared/types'
import clsx from 'clsx'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { ChangeFileStatusModal } from './change-file-status-modal'

export const AdminTable = () => {
  const [files, setFiles] = useState<IFile[]>([])
  const [loading, setLoading] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)
  const [siteEnabled, setSiteEnabled] = useState(false)
  const [activeFileId, setActiveFileId] = useState<string | null>(null)

  const [opened, setOpened] = useState(false)
  const toggleOpened = useCallback(() => setOpened((previous) => !previous), [])

  const getFiles = useCallback(async (shouldResetLoadingState = true) => {
    try {
      if (shouldResetLoadingState) setLoading(true)
      const res = await instance.get<{ files: IFile[] }>('/files/get-all')
      if (res.data.files) {
        setFiles(res.data.files)
      } else throw new Error('No files found')
    } catch {
      toast.error('Не удалось получить список файлов!')
    } finally {
      if (shouldResetLoadingState) setLoading(false)
    }
  }, [])

  const handleEnableSite = useCallback(async (value: boolean) => {
    setSiteEnabled(value)
    try {
      const res = await instance.put('/settings', { siteEnabled: value })
      if (res.status === 200) toast.success('Изменения сохранены!')
    } catch {
      toast.error('Не удалось обновить видимость сайта')
    }
  }, [])

  const handleStatusClick = useCallback(
    (fileId: string) => {
      toggleOpened()
      setActiveFileId(fileId)
    },
    [toggleOpened]
  )

  const handleRemoveFile = useCallback(
    async (id: string) => {
      try {
        setDeleteLoading(true)
        await instance.delete(`/files/${id}`)
        await getFiles(false)
      } catch (error: any) {
        console.log(error)
        toast.error(error?.response?.data?.message || 'Не удалось удалить файл')
      } finally {
        setDeleteLoading(false)
      }
    },
    [getFiles]
  )

  const getSiteEnabled = useCallback(async () => {
    try {
      const res = await instance.get('/settings')
      setSiteEnabled(res.data.siteEnabled || false)
    } catch (error: any) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    getFiles()
    getSiteEnabled()
  }, [getFiles, getSiteEnabled])

  return (
    <div className="mx-auto mt-20 h-full w-full max-w-[1480px] py-10">
      <h1 className="text-center text-[3rem] font-bold leading-[3.75rem] text-primary-text max-lg:text-[2rem] max-lg:leading-[2rem]">
        Административная панель Kinder Joy
      </h1>
      <div className="flex items-center">
        <input
          id="checked-checkbox"
          type="checkbox"
          checked={siteEnabled}
          onChange={(e) => handleEnableSite(e.target.checked)}
          className="peer relative h-4 w-4 cursor-pointer appearance-none rounded-sm border border-primary-text bg-white checked:border-0 checked:bg-primary-text"
        />
        <label
          htmlFor="checked-checkbox"
          className="mt-0.5 ml-2 cursor-pointer select-none text-lg font-medium leading-[1.25rem]"
        >
          Сайт запущен
        </label>
        <svg
          className="absolute ml-0.5 hidden h-3 w-3 peer-checked:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <div className="mt-8 h-full w-full">
        {loading ? (
          <p className="text-center">Загрузка...</p>
        ) : (
          <table className="files-table">
            <thead>
              <tr>
                <th>Номер</th>
                <th>Фото</th>
                <th>Дата загрузки</th>
                <th>Имя пользователя</th>
                <th>Id пользователя</th>
                <th>Telegram nickname</th>
                <th>Instagram nickname</th>
                <th>Номер телефона</th>
                <th>Статус</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file, index) => (
                <tr key={file._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div
                      key={file._id}
                      className="relative aspect-square h-[6rem] cursor-pointer rounded-lg"
                    >
                      <a
                        href={API_URL + file.path}
                        target="_blank"
                        className="block h-full w-full"
                      >
                        <Image
                          src={`${process.env.NEXT_PUBLIC_SERVER_URL}${file.path}`}
                          alt="uploaded file"
                          className="rounded-lg bg-gray object-cover object-center"
                          unoptimized
                          fill
                        />
                      </a>
                      <button
                        onClick={() => handleRemoveFile(file._id)}
                        disabled={deleteLoading}
                        className={clsx(
                          'absolute top-1 right-1 h-8 w-8 rounded-full bg-red-500 p-2',
                          deleteLoading && 'animate-pulse'
                        )}
                      >
                        <Image src={trash} alt="trash" className="w-full" />
                      </button>
                    </div>
                  </td>
                  <td>
                    {format(new Date(file.createdAt), 'dd-MM-yyyy HH:mm') || 'Не указано'}
                  </td>
                  <td>{file.owner.username || 'Не указано'}</td>
                  <td>
                    <Link href={`/admin/users/${file.owner.id}`}>{file.owner.id}</Link>
                  </td>
                  <td>{file.owner.tg_username || 'Не указано'}</td>
                  <td>{file.owner.instagramName || 'Не указано'}</td>
                  <td>+{file.owner.phoneNumber || 'Не указано'}</td>
                  <td
                    className="cursor-pointer"
                    onClick={() => handleStatusClick(file._id)}
                    style={{ backgroundColor: statusesColorMap[file.status] }}
                  >
                    <p className="text-white">{statusesMap[file.status]}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <ChangeFileStatusModal
        opened={opened}
        fileId={activeFileId}
        toggleOpened={toggleOpened}
        onSuccessStatusChange={() => getFiles(false)}
      />
    </div>
  )
}
