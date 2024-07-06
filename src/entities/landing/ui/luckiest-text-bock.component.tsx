import { IconComponent } from '@shared/ui'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import type { RefObject } from 'react'

const springConfig = {
  stiffness: 600,
  mass: 5,
  damping: 80,
}

export const LuckiestTextBlock = (props: { sectionRef: RefObject<HTMLDivElement> }) => {
  const { sectionRef } = props

  const { t } = useTranslation()

  const { scrollYProgress } = useScroll({
    layoutEffect: false,
    target: sectionRef,
    offset: ['end end', 'center start'],
  })

  const transformValue = useTransform(scrollYProgress, [0, 1], [0, -300])
  const transformStyle = useSpring(transformValue, springConfig)

  return (
    <motion.div
      style={{ translateX: transformStyle }}
      className="w-full max-w-[26.25rem] pb-[15.5rem] pt-[18.5rem] text-secondary-text will-change-transform max-xl:pt-10 max-xl:text-center max-lg:pb-0"
    >
      <h1 className="text-[3.75rem] font-bold leading-[3.75rem] text-primary-text max-lg:mx-auto max-lg:max-w-[18.75rem] max-lg:text-[2.25rem] max-lg:leading-[2.25rem]">
        {t('LUCKIEST.TITLE')}
      </h1>
      <h3 className="mt-[1.875rem] text-[3rem] font-bold leading-[3rem] max-lg:mt-6 max-lg:text-[2.25rem] max-lg:leading-[2.25rem]">
        {t('LUCKIEST.SECOND_TEXT')}
      </h3>
      <h3 className="mt-[1.875rem] text-[3rem] font-bold leading-[3rem] max-lg:mx-auto max-lg:mt-6 max-lg:max-w-[18.75rem] max-lg:text-[2.25rem] max-lg:leading-[2.25rem]">
        {t('LUCKIEST.THIRD_TEXT')}
      </h3>
      <IconComponent
        name="giftsEgg"
        className="absolute top-[64px] right-[-16%] z-[-1] rotate-[5deg] max-xl:hidden"
      />
      <IconComponent
        name="giftsEggMob"
        className="absolute left-[-150px] top-[10px] z-[-1] hidden rotate-[24deg] max-xl:block"
      />
    </motion.div>
  )
}
