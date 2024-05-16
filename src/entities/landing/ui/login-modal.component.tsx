import { instance } from '@shared/api'
import type { IUser } from '@shared/types'
import { Button, IconComponent, Input } from '@shared/ui'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'

interface IProperties {
  opened: boolean
  setOpened: (value: boolean) => void
  setUserData: (value: IUser) => void
  setPdModal: (value: boolean) => void
}
export const LoginModal = (props: IProperties) => {
  const { opened, setOpened, setUserData, setPdModal } = props

  const { t } = useTranslation(undefined, { keyPrefix: 'LOGIN_MODAL' })

  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true)
      const res = await instance.get<{ user: IUser }>(
        `/users?phoneNumber=${phone.replace(/\D/g, '')}`
      )
      if (!res.data.user) throw new Error('error')
      setUserData(res.data.user)
      setOpened(false)
      setPdModal(true)
    } catch {
      toast.error('Пользователь с таким номером телефона не найден!', {
        bodyClassName: 'z-[999999999]',
      })
    } finally {
      setLoading(false)
    }
  }, [setUserData, phone, setOpened, setPdModal])

  return (
    <AnimatePresence>
      {opened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99999] flex h-screen w-screen items-center justify-center bg-[rgba(255,255,255,.8)] px-4"
        >
          <div className="aspect-square w-full max-w-[37.5rem] rounded-[1.25rem] bg-[#F3DA97] p-9 shadow-2xl max-lg:h-[28.125rem] max-lg:px-5 max-lg:py-7">
            <button className="ml-auto block" onClick={() => setOpened(false)}>
              <IconComponent name="close" />
            </button>
            <div className="mx-auto mt-[5.9375rem] flex w-full max-w-[27rem]  flex-col items-center max-lg:mt-[4.375rem]">
              <h2 className="text-center text-[3.75rem] font-bold leading-[3.75rem] max-lg:text-[2.75rem] max-lg:leading-[2.75rem]">
                {t('TITLE')}
              </h2>
              <Input
                placeholder="+7 XXX XXX XX XX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                containerClassName="my-[1.875rem] max-lg:my-[1.375rem]"
              />
              <Button variant="secondary" onClick={handleSubmit} disabled={loading}>
                {t('NEXT')}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
