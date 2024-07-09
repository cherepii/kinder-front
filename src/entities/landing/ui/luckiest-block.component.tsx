import eggsBox from '@public/assets/images/eggs-box.png'
import ellipseBg from '@public/assets/images/ellipse-bg.png'
import projectorImage from '@public/assets/images/projector.png'
import clsx from 'clsx'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/router'
import type { RefObject } from 'react'

const springConfig = {
  stiffness: 600,
  mass: 5,
  damping: 80,
}

export const LuckiestBlock = (props: { sectionRef: RefObject<HTMLDivElement> }) => {
  const { sectionRef } = props

  const { locale } = useRouter()
  const isKz = locale === 'kk'

  const { scrollYProgress } = useScroll({
    layoutEffect: false,
    target: sectionRef,
    offset: ['end end', 'center start'],
  })

  const projectorTransform = useTransform(scrollYProgress, [0, 1], [0, -400])
  const eggsTransform = useTransform(scrollYProgress, [0, 1], [0, -700])

  const projectorStyle = useSpring(projectorTransform, springConfig)
  const eggsStyle = useSpring(eggsTransform, springConfig)

  return (
    <div className="relative top-[10.25rem] flex flex-1 max-lg:top-0 max-lg:pt-[34.375rem]">
      <motion.div
        style={{ translateY: eggsStyle }}
        className={clsx(
          'absolute left-[-50px] z-[3] aspect-[376/391] w-[23.5rem] will-change-transform max-lg:bottom-[initial] max-lg:left-[-75px] max-lg:top-[-30px] max-lg:w-[20.4375rem]',
          isKz ? 'bottom-[348px]' : 'bottom-[250px]'
        )}
      >
        <Image
          draggable={false}
          src={projectorImage}
          alt="projector"
          className="h-full w-full"
        />
      </motion.div>
      <motion.div
        style={{ translateY: projectorStyle }}
        className="absolute right-[-50px] top-0 z-[1] aspect-[471/541] w-[29.4375rem] will-change-transform max-lg:right-[-120px] max-lg:top-[-24px] max-lg:w-[23.125rem]"
      >
        <Image
          draggable={false}
          src={eggsBox}
          alt="eggs box"
          className="h-full w-full object-cover object-center"
        />
      </motion.div>
      <motion.div
        style={{ translateY: projectorStyle }}
        className="absolute right-[-19.375rem] top-[0] h-[40rem] max-w-[1200px] will-change-transform"
      >
        <Image
          draggable={false}
          src={ellipseBg}
          alt="ellipse bg"
          className="h-full w-full"
        />
      </motion.div>
    </div>
  )
}
