import { API_URL, instance } from '@shared/api'
import { Meta } from '@shared/meta'
import { type IUser, statusesColorMap, statusesMap } from '@shared/types'
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

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<IUser | null>(null)

  const getUsersFiles = useCallback(async () => {
    try {
      setLoading(true)
      const res = await instance.get<{ user: IUser }>(`/users/${id}`)
      if (res.data) setData(res.data.user)
    } catch {
      toast.error('Не удалось получить данные. Попробуйте позже')
    } finally {
      setLoading(false)
    }
  }, [id])

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
                <h1 className="text-center text-4xl font-bold text-primary-text max-lg:text-[2rem] max-lg:leading-[2rem]">
                  Таблица загруженных файлов пользователя {data?.username || 'Аноним'}
                </h1>
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
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </PhotoProvider>
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
