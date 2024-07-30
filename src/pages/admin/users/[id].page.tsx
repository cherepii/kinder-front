import { API_URL, instance } from '@shared/api'
import { Meta } from '@shared/meta'
import { type IUser, statusesColorMap, statusesMap } from '@shared/types'
import { Loader } from '@shared/ui'
import { ChangeFileStatusModal } from '@widgets/admin-table'
import { Layout } from '@widgets/layout'
import { format } from 'date-fns'
import type { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useCallback, useEffect, useState } from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { toast } from 'react-toastify'

const UsersFilesPage: NextPage<{ id: string }> = (props) => {
  const { id } = props

  const [visible, setVisible] = useState(false)
  const toggleVisible = useCallback(() => setVisible((previous) => !previous), [])

  const [selectedFileId, setSelectedFileId] = useState<string | null>(null)

  const [loading, setLoading] = useState(false)
  const [isFetching, setIsFetching] = useState(false)
  const [data, setData] = useState<IUser | null>(null)

  const getUsersFiles = useCallback(
    async (shouldResetLoadingState = true) => {
      try {
        if (shouldResetLoadingState) setLoading(true)
        setIsFetching(true)
        const res = await instance.get<{ user: IUser }>(`/users/${id}`)
        if (res.data) setData(res.data.user)
      } catch {
        toast.error('Не удалось получить данные. Попробуйте позже')
      } finally {
        if (shouldResetLoadingState) setLoading(false)
        setIsFetching(false)
      }
    },
    [id]
  )

  const handleOpenChangeStatusModal = (fileId: string) => {
    toggleVisible()
    setSelectedFileId(fileId)
  }

  const onSuccessStatusChange = () => {
    getUsersFiles(false)
  }

  useEffect(() => {
    getUsersFiles()
  }, [getUsersFiles])

  return (
    <Layout Meta={<Meta description="" title="Kinder Joy admin" />}>
      <Layout.Header />
      <Layout.Main className="flex flex-1 flex-col">
        <PhotoProvider>
          <div className="mx-auto mt-20 h-full w-full max-w-[80rem] py-10">
            {loading ? (
              <p>Загрузка...</p>
            ) : (
              <div>
                <div className="flex items-center justify-center">
                  <h1 className="mt-1 mr-4 text-center text-4xl font-bold text-primary-text max-lg:text-[2rem] max-lg:leading-[2rem]">
                    Таблица загруженных файлов пользователя {data?.username || 'Аноним'}
                  </h1>
                </div>
                <div className="mt-14 grid grid-cols-3 gap-10">
                  {data?.files.map((file) => (
                    <div key={file._id} className="flex items-start gap-x-7">
                      <div
                        key={file._id}
                        className="relative aspect-square w-[11.25rem] cursor-pointer rounded-lg"
                      >
                        <PhotoView src={`${API_URL}${file.path}`}>
                          <Image
                            src={`${API_URL}${file.path}`}
                            alt="uploaded file"
                            className="rounded-lg bg-gray object-cover object-center"
                            unoptimized
                            fill
                          />
                        </PhotoView>
                      </div>
                      <div>
                        <p className="text-xl">
                          {format(file.createdAt, 'dd-MM-yyyy HH:mm')}
                        </p>
                        <p
                          style={{ backgroundColor: statusesColorMap[file.status] }}
                          className="mt-2 rounded-lg px-4 py-2 text-center text-xl font-medium text-white"
                        >
                          {statusesMap[file.status]}
                        </p>
                        <button
                          onClick={() => handleOpenChangeStatusModal(file._id)}
                          className="mt-2 rounded-lg bg-primary-accent px-4 py-2 text-center text-xl font-medium leading-[20px] text-white"
                        >
                          Редактировать
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="fixed top-[80px] right-[40px]">{isFetching && <Loader />}</div>
        </PhotoProvider>
        <ChangeFileStatusModal
          opened={visible}
          fileId={selectedFileId}
          toggleOpened={toggleVisible}
          onSuccessStatusChange={onSuccessStatusChange}
        />
      </Layout.Main>
      <Layout.Footer />
    </Layout>
  )
}

export default UsersFilesPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      id: context?.params?.id || '',
      ...(await serverSideTranslations(context.locale ?? 'ru', ['common'])),
    },
  }
}
