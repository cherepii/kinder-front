import dividerSmall from '@public/assets/images/divider-small.png'
import rules1 from '@public/assets/images/rules-1.png'
import rules2 from '@public/assets/images/rules-2.png'
import rules3 from '@public/assets/images/rules-3.png'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

export const Rules = () => {
  const { t } = useTranslation(undefined, { keyPrefix: 'RULES' })

  return (
    <div className="mt-[3.75rem] flex w-full flex-wrap items-start justify-center gap-y-[100px] max-lg:mt-6">
      <div className="top-20 flex h-[31.5625rem] w-full max-w-[19.6875rem] items-center justify-center max-lg:sticky">
        <div className="mt-10 flex h-full w-full rotate-[-1deg] flex-col rounded-[1.75rem] bg-[#F1B72B] py-5 px-[1.125rem] text-center drop-shadow-card-sm max-lg:mt-0">
          <Image src={dividerSmall} alt="small divider" className="w-full" />
          <p className="mt-12 mb-11 text-[1.875rem] font-bold leading-[1.875rem]">
            {t('FIRST_BLOCK.TOP')}
            <br /> {t('FIRST_BLOCK.BOTTOM')}
          </p>
          <Image src={rules1} alt="rule" className="aspect-[260/216] w-full" />
          <Image src={dividerSmall} alt="small divider" className="mt-auto w-full" />
        </div>
      </div>
      <div className="top-20 flex h-[31.5625rem] w-full max-w-[19.6875rem] items-center justify-center max-lg:sticky ">
        <div className="ml-[-2rem] flex h-full w-full rotate-[6deg] flex-col rounded-[1.75rem] bg-[#F3410E] py-5 px-[1.125rem] text-center drop-shadow-card-sm max-lg:ml-0">
          <Image src={dividerSmall} alt="small divider" className="w-full" />
          <p className="mt-12 mb-11 text-[1.875rem] font-bold leading-[1.875rem] text-secondary-text">
            {t('SECOND_BLOCK')}
          </p>
          <Image src={rules2} alt="rule" className="aspect-[298/231] w-full" />
          <Image src={dividerSmall} alt="small divider" className="mt-auto w-full" />
        </div>
      </div>
      <div className="top-20 flex h-[31.5625rem] w-full max-w-[19.6875rem] items-center justify-center max-lg:sticky ">
        <div className="mt-12 ml-[-0.25rem] flex h-full w-full rotate-[-4deg] flex-col rounded-[1.75rem] bg-[#FFFFFF] py-5 px-[1.125rem] text-center drop-shadow-card max-lg:ml-0 max-lg:mt-0">
          <Image src={dividerSmall} alt="small divider" className="w-full" />
          <p className="mt-12 text-[2.25rem] font-bold leading-[2.25rem]">
            {t('THIRD_BLOCK.TITLE')}
          </p>
          <p className="mb-[2rem] text-xl font-normal leading-[1.1rem]">
            {t('THIRD_BLOCK.SUB_TITLE.TOP')}
            <br /> {t('THIRD_BLOCK.SUB_TITLE.BOTTOM')}
          </p>
          <Image src={rules3} alt="rule" className="aspect-[266/231] w-full px-5" />
          <Image src={dividerSmall} alt="small divider" className="mt-auto w-full" />
        </div>
      </div>
    </div>
  )
}
