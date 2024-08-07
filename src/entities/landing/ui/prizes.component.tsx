import ellipseBg from '@public/assets/images/ellipse-bg.png'
import headphones from '@public/assets/images/headphones.png'
import meloman from '@public/assets/images/meloman.png'
import phone from '@public/assets/images/phone.png'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import type { RefObject } from 'react'

const springConfig = {
  stiffness: 400,
  mass: 2,
  damping: 70,
}

export const Prizes = (props: { sectionRef: RefObject<HTMLDivElement> }) => {
  const { sectionRef } = props

  const { scrollYProgress } = useScroll({
    layoutEffect: false,
    target: sectionRef,
    offset: ['end end', 'center start'],
  })

  const headphonesTransform = useTransform(scrollYProgress, [0, 1], [0, -600])
  const phoneTransform = useTransform(scrollYProgress, [0, 1], [0, -400])
  const melomanTransform = useTransform(scrollYProgress, [0, 1], [0, -800])

  const headphonesStyle = useSpring(headphonesTransform, springConfig)
  const phoneStyle = useSpring(phoneTransform, springConfig)
  const melomanStyle = useSpring(melomanTransform, springConfig)

  return (
    <div className="relative top-[9.625rem] flex flex-1 max-lg:top-0 max-lg:pt-[34.375rem]">
      <motion.div
        style={{ translateY: headphonesStyle }}
        className="absolute right-[190px] top-[170px] z-[3] aspect-[348/478] w-[23.625rem] will-change-transform max-lg:top-[-8px] max-lg:right-[initial] max-lg:left-[-6rem] max-lg:w-[21.5625rem]"
      >
        <Image
          draggable={false}
          src={headphones}
          alt="headphones"
          className="h-full w-full rotate-[-50deg]"
        />
      </motion.div>
      <motion.div
        style={{ translateY: phoneStyle }}
        className="absolute right-0 top-0 z-[1] aspect-[302/473] w-[18.875rem] will-change-transform max-lg:top-[36px] max-lg:right-[20px] max-lg:w-[14.5625rem]"
      >
        <Image
          draggable={false}
          src={phone}
          alt="phone"
          className="h-full w-full rotate-[41deg]"
        />
      </motion.div>
      <motion.div
        style={{ translateY: melomanStyle }}
        className="absolute right-[-20px] bottom-[140px] z-[2] aspect-[258/264] w-[16.125rem] will-change-transform max-lg:top-[initial] max-lg:bottom-[-10px] max-lg:right-3 max-lg:w-[14.6875rem]"
      >
        <Image
          draggable={false}
          src={meloman}
          alt="meloman"
          className="h-full w-full rotate-[27deg]"
        />
      </motion.div>
      <motion.div
        style={{ translateY: headphonesTransform }}
        className="absolute right-[-18.5rem] top-[0] h-[40rem] max-w-[1200px] will-change-transform"
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
