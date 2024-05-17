import { instance } from '@shared/api'
import { Meta } from '@shared/meta'
import type { IUser } from '@shared/types'
import { Layout } from '@widgets/layout'
import type { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const AdminPage = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [loading, setLoading] = useState(false)

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

  useEffect(() => {
    getUsers()
  }, [getUsers])

  return (
    <Layout Meta={<Meta description="" title="Kinder Joy admin" />}>
      <Layout.Header />
      <Layout.Main className="flex flex-1 flex-col">
        <div className="mx-auto mt-20 h-full w-full max-w-[80rem]">
          <h1 className=" text-center text-[3rem] font-bold leading-[3.75rem] text-primary-text max-lg:text-[2rem] max-lg:leading-[2rem]">
            Административная панель Kinder Joy
          </h1>
          <div className="mt-8 h-full w-full">
            {loading ? (
              <p className="text-center">Загрузка...</p>
            ) : (
              <table className="users-table">
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
                        <div className="flex flex-wrap">Здесь будут файлы</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
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
