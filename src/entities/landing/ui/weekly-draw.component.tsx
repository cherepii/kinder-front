import ellipseBg from '@public/assets/images/ellipse-bg.png'
import psBox from '@public/assets/images/ps-box.png'
import psController from '@public/assets/images/ps-controller.png'
import weeklyCert from '@public/assets/images/weekly-cert.png'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import type { RefObject } from 'react'

const springConfig = {
  stiffness: 400,
  mass: 2,
  damping: 70,
}

export const WeeklyDraw = (props: { sectionRef: RefObject<HTMLDivElement> }) => {
  const { sectionRef } = props

  const { scrollYProgress } = useScroll({
    layoutEffect: false,
    target: sectionRef,
    offset: ['end end', 'center start'],
  })

  const psControllerTransform = useTransform(scrollYProgress, [0, 1], [0, -600])
  const psBoxTransform = useTransform(scrollYProgress, [0, 1], [0, -400])
  const melomanTransform = useTransform(scrollYProgress, [0, 1], [0, -800])

  const psControllerStyle = useSpring(psControllerTransform, springConfig)
  const psBoxStyle = useSpring(psBoxTransform, springConfig)
  const melomanStyle = useSpring(melomanTransform, springConfig)

  return (
    <div className="relative top-[9.625rem] flex flex-1 max-lg:top-0 max-lg:pt-[34.375rem]">
      <motion.div
        style={{ translateY: psControllerStyle }}
        className="absolute left-[-20px] bottom-[200px] z-[3] aspect-[488/449] w-[30.5rem] will-change-transform max-lg:top-[80px] max-lg:bottom-[initial] max-lg:left-[-36px] max-lg:w-[25.1875rem]"
      >
        <Image
          draggable={false}
          src={psController}
          alt="play station controller"
          className="h-full w-full object-cover object-center"
        />
      </motion.div>
      <motion.div
        style={{ translateY: psBoxStyle }}
        className="absolute right-[-40px] top-0 z-[1] aspect-[315/517] w-[19.6875rem] will-change-transform max-lg:top-[-86px] max-lg:right-[-60px] max-lg:w-[12.5rem]"
      >
        <Image
          draggable={false}
          src={psBox}
          alt="play station box"
          className="h-full w-full"
        />
      </motion.div>
      <motion.div
        style={{ translateY: melomanStyle }}
        className="absolute right-[-240px] bottom-[240px] z-[2] aspect-[395/154] w-[24.6875rem] will-change-transform max-lg:bottom-[initial] max-lg:top-6 max-lg:right-[initial] max-lg:left-[60px] max-lg:w-[17.375rem]"
      >
        <Image
          draggable={false}
          src={weeklyCert}
          alt="weekly certificate"
          className="h-full w-full object-cover object-center"
        />
      </motion.div>
      <motion.div
        style={{ translateY: psControllerStyle }}
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
