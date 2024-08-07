import { instance } from '@shared/api'
import { type IUser, statusesColorMap, statusesMap } from '@shared/types'
import { IconComponent } from '@shared/ui'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

interface IProperties {
  userData: IUser | null
  opened: boolean
  setOpened: (value: boolean) => void
}
export const PersonalCabinetModal = (props: IProperties) => {
  const { opened, userData: defaultUserData, setOpened } = props

  const [userData, setUserData] = useState(defaultUserData)
  const [loading, setLoading] = useState(false)

  const { t } = useTranslation(undefined, { keyPrefix: 'PERSONAL_CABINET_MODAL' })

  const getUserData = useCallback(async () => {
    const formattedPhone = defaultUserData?.phoneNumber?.replace(/\D/g, '')

    try {
      setLoading(true)
      const res = await instance.get<{ user: IUser }>(
        `/users?phoneNumber=${formattedPhone}`
      )
      if (!res.data.user) throw new Error('error')
      setUserData(res.data.user)
    } catch {
      toast.error('Пользователь с таким номером телефона не найден!')
    } finally {
      setLoading(false)
    }
  }, [defaultUserData])

  useEffect(() => {
    if (opened) {
      getUserData()
    }
  }, [opened, getUserData])

  return (
    <AnimatePresence>
      {opened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpened(false)}
          className="fixed inset-0 z-[99999] flex h-screen w-screen cursor-pointer items-center justify-center bg-[rgba(255,255,255,.8)] px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={clsx(
              'aspect-square max-h-[37.5rem] w-full max-w-[37.5rem] cursor-default overflow-y-auto rounded-[1.25rem] bg-[#F3DA97] p-9 shadow-2xl max-lg:h-[28.125rem] max-lg:px-5 max-lg:py-7',
              loading && 'animate-pulse'
            )}
          >
            <button className="ml-auto block" onClick={() => setOpened(false)}>
              <IconComponent name="close" />
            </button>
            <div className="mx-auto mt-8 flex w-full flex-col items-center max-lg:mt-8">
              <h2 className="text-center text-[3.75rem] font-bold leading-[3.75rem] max-lg:text-[2.75rem] max-lg:leading-[2.75rem]">
                {t('TITLE')}
              </h2>
              <p className="text-center text-[1.875rem] leading-[2.25rem] max-lg:text-lg">
                {t('SUB_TITLE')}
              </p>
              <div className="mt-6 grid w-full grid-cols-[repeat(3,minmax(100px,160px))] gap-x-5 gap-y-[3.375rem] overflow-y-auto max-lg:mt-[0.875rem] max-lg:gap-y-8 max-lg:gap-x-3">
                {userData?.files.map((file) => (
                  <div key={file._id}>
                    <div className="relative aspect-square w-full rounded-xl">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_SERVER_URL}${file.path}`}
                        alt="uploaded file"
                        quality={1}
                        fill
                        className="w-ful h-full rounded-xl rounded-b-none bg-gray object-cover object-center"
                      />
                    </div>
                    <div
                      className="w-full py-2"
                      style={{ backgroundColor: statusesColorMap[file.status] }}
                    >
                      <p className="text-center text-lg text-white">
                        {statusesMap[file.status]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
