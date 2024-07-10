import type { IFormValues } from '@features/login'
import { AdminLoginModal } from '@features/login'
import { Meta } from '@shared/meta'
import { AdminTable } from '@widgets/admin-table'
import { Layout } from '@widgets/layout'
import type { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useCallback, useState } from 'react'
import { PhotoProvider } from 'react-photo-view'
import { toast } from 'react-toastify'

const AdminPage = () => {
  const [opened, setOpened] = useState(true)
  const [isAuth, setIsAuth] = useState(false)

  const handleLogin = useCallback((values: IFormValues) => {
    const name = process.env.NEXT_PUBLIC_ADMIN_NAME
    const pass = process.env.NEXT_PUBLIC_ADMIN_PASS

    const isCorrect = name === values.name && pass === values.password
    if (isCorrect) {
      toast.success('Вы успешно вошли в систему!')
      setIsAuth(true)
      setOpened(false)
    } else {
      toast.error('Введены неверные данные!')
    }
  }, [])

  return (
    <Layout Meta={<Meta description="" title="Kinder Joy admin" />}>
      <Layout.Header />
      <Layout.Main className="flex flex-1 flex-col">
        {isAuth ? (
          <PhotoProvider maskOpacity={0.8}>
            <AdminTable />
          </PhotoProvider>
        ) : (
          <p className="my-auto flex place-self-center text-3xl">
            You need to sign in to see this page...
          </p>
        )}
        <AdminLoginModal onSubmit={handleLogin} opened={opened} setOpened={setOpened} />
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
