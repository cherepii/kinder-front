import trash from '@public/assets/images/trash.png'
import { instance } from '@shared/api'
import type { IUser } from '@shared/types'
import clsx from 'clsx'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { PhotoView } from 'react-photo-view'
import { toast } from 'react-toastify'

export const AdminTable = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [loading, setLoading] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)
  const [siteEnabled, setSiteEnabled] = useState(false)

  const getUsers = useCallback(async () => {
    try {
      setLoading(true)
      const res = await instance.get<{ users: IUser[] }>('/users')
      if (res.data.users) {
        setUsers(res.data.users)
      } else throw new Error('No users found')
    } catch {
      toast.error('Не удалось получить список пользователей!')
    } finally {
      setLoading(false)
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

  const handleRemoveFile = useCallback(
    async (id: string) => {
      try {
        setDeleteLoading(true)
        await instance.delete(`/files/${id}`)
        await getUsers()
      } catch (error: any) {
        console.log(error)
        toast.error(error?.response?.data?.message || 'Не удалось удалить файл')
      } finally {
        setDeleteLoading(false)
      }
    },
    [getUsers]
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
    getUsers()
    getSiteEnabled()
  }, [getUsers, getSiteEnabled])

  return (
    <div className="mx-auto mt-20 h-full w-full max-w-[80rem] py-10">
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
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <div className="mt-8 h-full w-full">
        {loading ? (
          <p className="text-center">Загрузка...</p>
        ) : (
          <table className="users-table overflow-hidden">
            <thead>
              <tr>
                <th>Имя</th>
                <th>Номер телефона</th>
                <th>Telegram nickname</th>
                <th>Instagram nickname</th>
                <th>Файлы</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.username || 'Не указано'}</td>
                  <td>+{user.phoneNumber || 'Не указано'}</td>
                  <td>{user.tg_username || 'Не указано'}</td>
                  <td>{user.instagramName || 'Не указано'}</td>
                  <td>
                    <div className="flex gap-2 overflow-x-auto">
                      {user.files.length > 0 ? (
                        user.files.map((file) => (
                          <div
                            key={file._id}
                            className="relative aspect-square h-[6rem] cursor-pointer rounded-lg"
                          >
                            <PhotoView
                              src={`${process.env.NEXT_PUBLIC_SERVER_URL}${file.path}`}
                            >
                              <Image
                                src={`${process.env.NEXT_PUBLIC_SERVER_URL}${file.path}`}
                                alt="uploaded file"
                                className="rounded-lg bg-gray object-cover object-center"
                                unoptimized
                                fill
                              />
                            </PhotoView>
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
                        ))
                      ) : (
                        <p>Еще нет файлов</p>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
