import { IconComponent } from '@shared/ui'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import type { RefObject } from 'react'

const springConfig = {
  stiffness: 600,
  mass: 5,
  damping: 80,
}
export const PrizesTextBlock = (props: { sectionRef: RefObject<HTMLDivElement> }) => {
  const { sectionRef } = props

  const { t } = useTranslation()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['end end', 'center start'],
    layoutEffect: false,
  })

  const transformValue = useTransform(scrollYProgress, [0, 1], [0, -300])
  const transformStyle = useSpring(transformValue, springConfig)

  return (
    <motion.div
      style={{ translateX: transformStyle }}
      className="w-full max-w-[24.1875rem] pb-[13.25rem] pt-[314px] text-secondary-text will-change-transform max-xl:pt-10 max-xl:text-center max-lg:pb-0"
    >
      <h1 className="text-[3.75rem] font-bold leading-[3.75rem] text-primary-text max-lg:text-[2.25rem] max-lg:leading-[2.25rem]">
        {t('PRIZES.TITLE')}
      </h1>
      <h3 className="mt-[1.875rem] text-[3rem] font-bold leading-[3rem] max-lg:mt-6 max-lg:text-[2.25rem] max-lg:leading-[2.25rem]">
        {t('PRIZES.FIRST_BLOCK.TITLE')}
        <span className="block text-[1.875rem] font-normal leading-[1.75rem] max-lg:text-[1.25rem] max-lg:leading-[1.5rem]">
          {t('PRIZES.FIRST_BLOCK.SUB_TITLE')}
        </span>
      </h3>
      <h3 className="my-[1.875rem] text-[3rem] font-bold leading-[3rem] max-lg:my-4 max-lg:text-[2.25rem] max-lg:leading-[2.25rem]">
        {t('PRIZES.SECOND_BLOCK.TITLE')}
      </h3>
      <h3 className="mt-[1.875rem] text-[3rem] font-bold leading-[3rem] max-lg:mt-0 max-lg:text-[2.25rem] max-lg:leading-[2.25rem]">
        {t('PRIZES.THIRD_BLOCK.TITLE')}

        <span className="block text-[1.875rem] font-normal leading-[1.75rem] max-lg:text-[1.25rem] max-lg:leading-[1.5rem]">
          {t('PRIZES.THIRD_BLOCK.SUB_TITLE.TOP')}

          <br />
          {t('PRIZES.THIRD_BLOCK.SUB_TITLE.BOTTOM')}
        </span>
      </h3>
      <IconComponent
        name="giftsEgg"
        className="absolute top-[4.625rem] left-[-42%] z-[-1] rotate-[-12deg] max-xl:hidden"
      />
      <IconComponent
        name="giftsEggMob"
        className="absolute top-[-9rem] left-[-0.5rem] z-[-1] hidden max-xl:block"
      />
    </motion.div>
  )
}
