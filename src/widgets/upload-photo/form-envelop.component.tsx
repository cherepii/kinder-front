import foreground from '@public/assets/images/envelop/foreground.png'
import fold from '@public/assets/images/envelop/top-fold.png'
import glitter from '@public/assets/images/glitter.png'
import snitch from '@public/assets/images/snitch.png'
import snitch2 from '@public/assets/images/snitch-2.png'
import { instance } from '@shared/api'
import { AttachmentInput, Button, Input } from '@shared/ui'
import clsx from 'clsx'
import type { ValueAnimationTransition } from 'framer-motion'
import { motion, useAnimate } from 'framer-motion'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import type { MouseEvent } from 'react'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const FOUR_MB_IN_BYTES = 4 * 1024 * 1024

const springConfig: ValueAnimationTransition<any> = {
  type: 'spring',
  stiffness: 200,
  mass: 10,
  damping: 30,
}

export const FormEnvelop = () => {
  const [opened, setOpened] = useState(false)
  const toggleOpened = useCallback(() => setOpened((previous) => !previous), [])

  const [loading, setLoading] = useState(false)

  const [animationCompleted, setAnimationCompleted] = useState(false)
  const toggleAnimationCompleted = useCallback(
    () => setAnimationCompleted((previous) => !previous),
    []
  )

  const [firstScope, startFirstSnitch] = useAnimate()
  const [secondScope, startSecondSnitch] = useAnimate()

  const { t } = useTranslation()

  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [photos, setPhotos] = useState<FileList | null>(null)

  const handleAnimation = useCallback(() => {
    setTimeout(() => {
      toggleAnimationCompleted()
    }, 300)
  }, [toggleAnimationCompleted])

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    ym(94_073_158, 'reachGoal', 'dw')

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
      ym(94_073_158, 'reachGoal', 'sendphoto')
      ym(94_073_158, 'reachGoal', 'reg')
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

  const animateFirstSnitch = useCallback(async () => {
    const randomValueX = Math.floor(Math.random() * 10)
    const randomValueY = Math.floor(Math.random() * 10)

    await startFirstSnitch(
      firstScope.current,
      {
        x: randomValueX,
        y: -randomValueY,
      },
      springConfig
    )
  }, [firstScope, startFirstSnitch])

  const animateSecondSnitch = useCallback(async () => {
    const randomValueX = Math.floor(Math.random() * 15)
    const randomValueY = Math.floor(Math.random() * 15)

    await startSecondSnitch(
      secondScope.current,
      {
        x: randomValueX,
        y: -randomValueY,
      },
      springConfig
    )
  }, [secondScope, startSecondSnitch])

  useEffect(() => {
    const interval = setInterval(async () => {
      animateFirstSnitch()
      animateSecondSnitch()
    }, 500)

    return () => {
      clearInterval(interval)
    }
  }, [animateFirstSnitch, animateSecondSnitch])

  return (
    <div className="relative mx-auto w-full max-w-[58.5rem]">
      <motion.div
        initial={{ paddingTop: 120 }}
        animate={{ paddingTop: opened ? 480 : 120 }}
        transition={{
          delay: 0.3,
          type: 'timing',
          duration: 0.5,
        }}
        className="relative overflow-hidden"
      >
        <motion.div
          whileTap={{ scale: 0.95 }}
          onClick={toggleOpened}
          className="relative z-[2] flex cursor-pointer flex-col items-center justify-center"
        >
          <div
            className={clsx(
              'absolute left-[50%] bottom-0 z-[1] aspect-[556/370] w-full max-w-[556px] translate-x-[-50%] rounded-t-[0.85rem] rounded-b-[1.75rem] bg-[#E6E8EA] max-lg:top-3'
            )}
          />
          <motion.div
            transition={{
              type: 'timing',
              delay: opened ? 0 : 0.3,
            }}
            animate={{ rotateX: opened ? 180 : 0, translateX: '-50%' }}
            initial={{ translateX: '-50%' }}
            onAnimationStart={handleAnimation}
            onAnimationEnd={handleAnimation}
            className={clsx(
              'absolute left-[50%] z-[1] aspect-[549/236] w-full max-w-[34.6125rem] origin-top translate-x-[-50%]',
              opened ? 'top-[14px]' : 'top-[10px] max-lg:top-[8px]',
              { '!z-[4]': !opened && animationCompleted }
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
              <AttachmentInput
                uploadedLength={photos?.length}
                onChange={(e) => setPhotos(e.target.files)}
              />
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
      <div className="ellipse-gradient absolute inset-x-0 bottom-[-5rem] z-[1] aspect-[936/490] w-full max-w-[64.5rem] max-lg:hidden"></div>
      <motion.div
        style={{ x: 0, y: 0 }}
        ref={firstScope}
        className="absolute -bottom-7 left-8 z-[2] aspect-[125/162] w-[7.8125rem] will-change-transform max-lg:hidden"
      >
        <Image src={snitch} alt="snitch" className="h-full w-full rotate-[-17.3deg]" />
      </motion.div>
      <Image
        src={glitter}
        alt="glitter"
        className="absolute bottom-[-17.5rem] left-[16rem] z-[1] aspect-[495/953] w-[30.9375rem] rotate-[92deg] max-lg:hidden"
      />
      <motion.div
        style={{ x: 0, y: 0 }}
        ref={secondScope}
        className="absolute bottom-[6.875rem] right-[3.125rem]  z-[3] aspect-[236/253] w-[14.75rem] will-change-transform  max-lg:hidden"
      >
        <Image src={snitch2} alt="snitch" className="f-full h-full" />
      </motion.div>
    </div>
  )
}
