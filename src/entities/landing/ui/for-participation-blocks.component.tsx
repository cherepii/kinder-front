import dividerSmall from '@public/assets/images/divider-small.png'
import image1 from '@public/assets/images/for-participation-1.png'
import image2 from '@public/assets/images/for-participation-2.png'
import image3 from '@public/assets/images/for-participation-3.png'
import { useIsMob } from '@shared/lib/hooks'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { useRef } from 'react'

const springConfig = { type: 'spring', damping: 15, stiffness: 80 }

export const ForParticipationBlocks = () => {
  const { t } = useTranslation(undefined, { keyPrefix: 'FOR_PARTICIPATION' })
  const containerReference = useRef(null)

  const isMob = useIsMob()

  const inView = useInView(containerReference, { once: true, amount: 0.7 })

  return (
    <div
      ref={containerReference}
      className="mt-[3.75rem] flex w-full flex-wrap items-start justify-center gap-y-[100px] max-lg:mt-6"
    >
      <motion.div
        initial={{ translateY: isMob ? 0 : 350 }}
        animate={{ translateY: isMob ? 0 : inView ? 0 : 350 }}
        transition={springConfig}
        className="top-20 flex h-[31.5625rem] w-full max-w-[19.6875rem] items-center justify-center max-lg:sticky"
      >
        <div className="mt-10 flex h-full w-full rotate-[-1deg] flex-col rounded-[1.75rem] bg-[#F3410E] py-5 text-center drop-shadow-card-sm max-lg:mt-0">
          <Image
            src={dividerSmall}
            alt="small divider"
            className="w-full px-[1.125rem]"
          />
          <div className="mt-12 mb-2 px-[14px] text-white">
            <p className="text-xl font-normal leading-[1.1rem]">
              {t('FIRST_BLOCK.UNDER_TITLE')}
            </p>
            <h3 className="text-[1.875rem] font-bold leading-[1.875rem]">
              {t('FIRST_BLOCK.TITLE')}
            </h3>
            <p className="text-xl font-normal leading-[1.1rem]">
              {t('FIRST_BLOCK.SUB_TITLE')}
            </p>
          </div>
          <Image
            src={image1}
            alt="for participation 1"
            className="aspect-[317/234] w-full"
          />
          <Image
            src={dividerSmall}
            alt="small divider"
            className="mt-auto w-full px-[1.125rem]"
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ translateY: isMob ? 0 : 350 }}
        animate={{ translateY: isMob ? 0 : inView ? 0 : 350 }}
        transition={{ ...springConfig, delay: 0.2 }}
        className="top-20 flex h-[31.5625rem] w-full max-w-[19.6875rem] items-center justify-center max-lg:sticky "
      >
        <div className="ml-[-2rem] flex h-full w-full rotate-[6deg] flex-col rounded-[1.75rem] bg-[#F1B72B] py-5 text-center drop-shadow-card-sm max-lg:ml-0">
          <Image
            src={dividerSmall}
            alt="small divider"
            className="w-full px-[1.125rem]"
          />
          <div className="mt-12 mb-11 px-[44px]">
            <p className="text-xl font-normal leading-[1.1rem]">
              {t('SECOND_BLOCK.UNDER_TITLE')}
            </p>
            <h3 className="text-[1.875rem] font-bold leading-[1.875rem]">
              {t('SECOND_BLOCK.TITLE')}
            </h3>
            <p className="text-xl font-normal leading-[1.1rem]">
              {t('SECOND_BLOCK.SUB_TITLE')}
            </p>
          </div>
          <Image
            src={image2}
            alt="for participation 2"
            className="aspect-[317/234] w-full"
          />
          <Image
            src={dividerSmall}
            alt="small divider"
            className="mt-auto w-full px-[1.125rem]"
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ translateY: isMob ? 0 : 350 }}
        animate={{ translateY: isMob ? 0 : inView ? 0 : 350 }}
        transition={{ ...springConfig, delay: 0.4 }}
        className="top-20 flex h-[31.5625rem] w-full max-w-[19.6875rem] items-center justify-center max-lg:sticky "
      >
        <div className="mt-12 ml-[-0.25rem] flex h-full w-full rotate-[-4deg] flex-col rounded-[1.75rem] bg-[#FFFFFF] py-5 text-center drop-shadow-card-sm max-lg:ml-0 max-lg:mt-0">
          <Image
            src={dividerSmall}
            alt="small divider"
            className="w-full px-[1.125rem]"
          />
          <div className="mt-12 mb-2 px-[72px]">
            <h3 className="text-[1.875rem] font-bold leading-[1.875rem]">
              {t('THIRD_BLOCK.TITLE')}
            </h3>
            <p className="text-xl font-normal leading-[1.1rem]">
              {t('THIRD_BLOCK.SUB_TITLE')}
            </p>
          </div>
          <Image
            src={image3}
            alt="for participation 3"
            className="aspect-[312/223] w-full"
          />
          <span className="block px-[2.5rem] text-[0.625rem] leading-3">
            {t('THIRD_BLOCK.DESC')}
          </span>
          <Image
            src={dividerSmall}
            alt="small divider"
            className="mt-auto w-full px-[1.125rem]"
          />
        </div>
      </motion.div>
    </div>
  )
}
