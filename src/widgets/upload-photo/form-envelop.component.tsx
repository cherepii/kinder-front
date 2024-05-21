import ellipse from '@public/assets/images/ellipse-form-bg.png'
import foreground from '@public/assets/images/envelop/foreground.png'
import fold from '@public/assets/images/envelop/top-fold.png'
import { instance } from '@shared/api'
import { AttachmentInput, Button, Input } from '@shared/ui'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import type { MouseEvent } from 'react'
import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'

const FOUR_MB_IN_BYTES = 4 * 1024 * 1024

export const FormEnvelop = () => {
  const [opened, setOpened] = useState(false)
  const toggleOpened = useCallback(() => setOpened((previous) => !previous), [])

  const [loading, setLoading] = useState(false)

  const { t } = useTranslation()

  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [photos, setPhotos] = useState<FileList | null>(null)

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    if (!photos || !opened) return
    e.stopPropagation()

    const formattedPhone = phoneNumber?.replace(/\D/g, '')

    if (!formattedPhone) {
      toast.warn('Введите корректный номер телефона!')
      return
    }

    const formData = new FormData()

    formData.append('phoneNumber', formattedPhone)
    formData.append('username', name)

    for (const photo of Array.from(photos)) {
      if (photo.size > FOUR_MB_IN_BYTES) {
        toast.warn(`Файл ${photo.name} больше 4МБ. Файл не будет загружен`)
        continue
      }

      formData.append('files', photo)
    }

    try {
      setLoading(true)
      await instance.post('/files/web-upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      toast.success('Фотографии загружены успешно!')
      toggleOpened()
      setName('')
      setPhoneNumber('')
      setPhotos(null)
    } catch {
      toast.error('Не удалось отправить фотографии! Попробуйте позже')
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ paddingTop: 120 }}
      animate={{ paddingTop: opened ? 480 : 120 }}
      transition={{
        delay: 0.3,
        type: 'timing',
        duration: 0.5,
      }}
      className="relative mx-auto w-full max-w-[58.5rem] overflow-hidden"
    >
      <Image
        src={ellipse}
        alt="ellipse"
        className="absolute inset-x-0 bottom-[-5rem] z-[1]"
      />
      <motion.div
        whileTap={{ scale: 0.95 }}
        onClick={toggleOpened}
        className="relative z-[2] flex cursor-pointer flex-col items-center justify-center"
      >
        <div
          className={clsx(
            'absolute left-[50%] bottom-0 z-[0] aspect-[556/370] w-full max-w-[556px] translate-x-[-50%] rounded-t-[0.85rem] rounded-b-[1.75rem] bg-[#E6E8EA] max-lg:top-3'
          )}
        />
        <motion.div
          transition={{
            type: 'spring',
            damping: 13,
            stiffness: 100,
            delay: opened ? 0 : 0.3,
          }}
          animate={{ rotateX: opened ? 180 : 0, translateX: '-50%' }}
          initial={{ translateX: '-50%' }}
          className={clsx(
            'absolute left-[50%]  z-[1] aspect-[549/236] w-full max-w-[34.6125rem] origin-top translate-x-[-50%]',
            opened ? 'top-[14px]' : 'top-[10px] max-lg:top-[8px]'
          )}
        >
          <Image src={fold} alt="fold" className="h-full w-full drop-shadow-fold" />
        </motion.div>
        <Image
          src={foreground}
          alt="foreground"
          className="relative z-[3] aspect-[556/381] w-full max-w-[35.15rem] rounded-[1.75rem] max-lg:rounded-[1.25rem]"
        />
        <motion.div
          transition={{
            type: 'spring',
            damping: 15,
            stiffness: 90,
            delay: opened ? 0.5 : 0,
          }}
          onClick={(e) => e.stopPropagation()}
          animate={{ translateY: opened ? 0 : '100%' }}
          initial={{ translateY: '100%' }}
          className="absolute bottom-14 z-[2] mx-5 h-[47.9375rem] w-full max-w-[30.375rem] cursor-default rounded-[2.75rem] bg-[#FAE09B] py-[4.125rem] px-[1.625rem] max-lg:bottom-[4.75rem] max-lg:h-[30.125rem] max-lg:w-[90%] max-lg:rounded-[0.9375rem] max-lg:px-[1.125rem] max-lg:py-11"
        >
          <h4 className="title-gradient text-center text-[3.75rem] font-bold leading-[3.75rem] max-lg:text-[2.25rem] max-lg:leading-[2.25rem]">
            {t('UPLOAD_FORM.TITLE')}
          </h4>
          <div className="mt-[2.375rem] w-full max-lg:mt-[1.75rem]">
            <Input
              placeholder={t('UPLOAD_FORM.NAME')}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder={t('UPLOAD_FORM.PHONE')}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              containerClassName="my-3"
            />
            <AttachmentInput onChange={(e) => setPhotos(e.target.files)} />
          </div>
        </motion.div>
        <Button
          onClick={handleClick}
          disabled={loading}
          type="submit"
          variant="secondary"
          containerClassName="!absolute z-[5] left-[50%] bottom-6 translate-x-[-50%]"
        >
          {t('UPLOAD_FORM.UPLOAD')}
        </Button>
      </motion.div>
    </motion.div>
  )
}
