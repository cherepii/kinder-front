import trash from '@public/assets/images/trash.png'
import { instance } from '@shared/api'
import { Meta } from '@shared/meta'
import type { IUser } from '@shared/types'
import { Layout } from '@widgets/layout'
import clsx from 'clsx'
import type { GetStaticProps } from 'next'
import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useCallback, useEffect, useState } from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { toast } from 'react-toastify'

const AdminPage = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [loading, setLoading] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)

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

  useEffect(() => {
    getUsers()
  }, [getUsers])

  return (
    <Layout Meta={<Meta description="" title="Kinder Joy admin" />}>
      <Layout.Header />
      <Layout.Main className="flex flex-1 flex-col">
        <PhotoProvider maskOpacity={0.8}>
          <div className="mx-auto mt-20 h-full w-full max-w-[80rem] py-10">
            <h1 className=" text-center text-[3rem] font-bold leading-[3.75rem] text-primary-text max-lg:text-[2rem] max-lg:leading-[2rem]">
              Административная панель Kinder Joy
            </h1>
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
        </PhotoProvider>
      </Layout.Main>
      <Layout.Footer />
    </Layout>
  )
}

export default AdminPage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'ru', ['common'])),
      // Will be passed to tre page component as props
    },
  }
}
