import ellipse from '@public/assets/images/ellipse-form-bg.png'
import foreground from '@public/assets/images/envelop/foreground.png'
import fold from '@public/assets/images/envelop/top-fold.png'
import { AttachmentInput, Button, Input } from '@shared/ui'
import { motion } from 'framer-motion'
import Image from 'next/image'
import type { MouseEvent } from 'react'
import { useCallback, useState } from 'react'

export const FormEnvelop = () => {
  const [opened, setOpened] = useState(false)
  const toggleOpened = useCallback(() => setOpened((previous) => !previous), [])

  const handleClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
  }, [])

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
        <div className="absolute left-[50%] bottom-0 z-[0] aspect-[549/236] w-full max-w-[549px] translate-x-[-50%] bg-[#E6E8EA] max-lg:top-3" />
        <motion.div
          transition={{
            type: 'spring',
            damping: 13,
            stiffness: 100,
            delay: opened ? 0 : 0.3,
          }}
          animate={{ rotateX: opened ? 180 : 0, translateX: '-50%' }}
          initial={{ translateX: '-50%' }}
          className="absolute left-[50%] top-[0.6rem] z-[1] aspect-[549/236] w-full max-w-[34.3125rem] origin-top translate-x-[-50%]"
        >
          <Image src={fold} alt="fold" className="h-full w-full drop-shadow-fold" />
        </motion.div>
        <Image
          src={foreground}
          alt="foreground"
          className="relative z-[3] aspect-[556/381] w-full max-w-[34.75rem]"
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
          className="absolute bottom-9 z-[2] h-[47.9375rem] w-full max-w-[30.375rem] cursor-default rounded-[2.75rem] bg-[#FAE09B] py-[4.125rem] px-[1.625rem]"
        >
          <h4 className="title-gradient text-center text-[3.75rem] font-bold leading-[3.75rem]">
            Загрузить фото
          </h4>
          <div className="mt-[2.375rem] w-full">
            <Input placeholder="Имя и фамилия" />
            <Input placeholder="Номер телефона" containerClassName="my-3" />
            <AttachmentInput />
          </div>
        </motion.div>
        <Button
          onClick={handleClick}
          type="submit"
          variant="secondary"
          containerClassName="!absolute z-[5] left-[50%] bottom-6 translate-x-[-50%]"
        >
          Загрузить
        </Button>
      </motion.div>
    </motion.div>
  )
}
