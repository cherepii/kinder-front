import { IconComponent } from '@shared/ui'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import type { RefObject } from 'react'

const springConfig = {
  stiffness: 600,
  mass: 5,
  damping: 80,
}

export const WeeklyDrawTextBlock = (props: { sectionRef: RefObject<HTMLDivElement> }) => {
  const { sectionRef } = props

  const { t } = useTranslation()

  const { scrollYProgress } = useScroll({
    layoutEffect: false,
    target: sectionRef,
    offset: ['end end', 'center start'],
  })

  const transformValue = useTransform(scrollYProgress, [0, 1], [0, 300])
  const transformStyle = useSpring(transformValue, springConfig)

  return (
    <motion.div
      style={{ translateX: transformStyle }}
      className="w-full max-w-[24.1875rem] pb-[14rem] pt-[19.625rem] text-right text-secondary-text will-change-transform max-xl:pt-10 max-lg:pb-0 max-lg:text-center"
    >
      <h1 className="text-[3.75rem] font-bold leading-[3.75rem] text-primary-text max-lg:mx-auto max-lg:max-w-[15rem] max-lg:text-[2.25rem] max-lg:leading-[2.25rem]">
        {t('WEEKLY_DRAW.TITLE')}
      </h1>
      <h3 className="mt-[1.875rem] text-[3rem] font-bold leading-[3rem] max-lg:mt-6 max-lg:text-[2.25rem] max-lg:leading-[2.25rem]">
        {t('WEEKLY_DRAW.FIRST_BLOCK.TITLE')}
      </h3>
      <h3 className="mt-[1.875rem] text-[3rem] font-bold leading-[3rem] max-lg:mt-6 max-lg:text-[2.25rem] max-lg:leading-[2.25rem]">
        <span className="block text-[1.875rem] font-normal leading-[1.75rem] max-lg:text-[1.25rem] max-lg:leading-[1.5rem]">
          {t('WEEKLY_DRAW.SECOND_BLOCK.UNDER_TITLE')}
        </span>
        {t('WEEKLY_DRAW.SECOND_BLOCK.TITLE')}

        <span className="block text-[1.875rem] font-normal leading-[1.75rem] max-lg:mx-auto max-lg:max-w-[15rem] max-lg:text-[1.25rem] max-lg:leading-[1.5rem]">
          {t('WEEKLY_DRAW.SECOND_BLOCK.SUB_TITLE')}
        </span>
      </h3>
      <IconComponent
        name="giftsEgg"
        className="absolute top-[84px] right-[-30%] z-[-1] rotate-[-55.35deg] max-xl:hidden"
      />
      <IconComponent
        name="giftsEggMob"
        className="absolute left-[-40px] top-16 z-[-1] hidden rotate-[-75deg] max-xl:block"
      />
    </motion.div>
  )
}
