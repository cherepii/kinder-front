import {
  LoginModal,
  PersonalCabinetModal,
  Prizes,
  PrizesTextBlock,
  Rules,
} from '@entities/landing'
import appStoreDownload from '@public/assets/images/app-store-download.png'
import divider from '@public/assets/images/divider.png'
import downloadPoster from '@public/assets/images/download-poster.png'
import funkoPop from '@public/assets/images/funko-pop.png'
import playMarketDownload from '@public/assets/images/google-play-download.png'
import harryPotterLogo from '@public/assets/images/harry-potter-logo.png'
import kinder from '@public/assets/images/kinder.png'
import kinder2 from '@public/assets/images/kinder-2.png'
import model1 from '@public/assets/images/model-1.png'
import model2 from '@public/assets/images/model-2.png'
import model3 from '@public/assets/images/model-3.png'
import model4 from '@public/assets/images/model-4.png'
import model5 from '@public/assets/images/model-5.png'
import model6 from '@public/assets/images/model-6.png'
import model7 from '@public/assets/images/model-7.png'
import model8 from '@public/assets/images/model-8.png'
import model9 from '@public/assets/images/model-9.png'
import model10 from '@public/assets/images/model-10.png'
import model11 from '@public/assets/images/model-11.png'
import model12 from '@public/assets/images/model-12.png'
import model13 from '@public/assets/images/model-13.png'
import model14 from '@public/assets/images/model-14.png'
import model15 from '@public/assets/images/model-15.png'
import model16 from '@public/assets/images/model-16.png'
import model17 from '@public/assets/images/model-17.png'
import model18 from '@public/assets/images/model-18.png'
import model19 from '@public/assets/images/model-19.png'
import model20 from '@public/assets/images/model-20.png'
import model21 from '@public/assets/images/model-21.png'
import model22 from '@public/assets/images/model-22.png'
import model23 from '@public/assets/images/model-23.png'
import model24 from '@public/assets/images/model-24.png'
import model25 from '@public/assets/images/model-25.png'
import newColelction from '@public/assets/images/new-collection.png'
import poster from '@public/assets/images/poster.png'
import posteMob from '@public/assets/images/poster-mob.png'
import { useIsMob } from '@shared/lib/hooks'
import { Meta } from '@shared/meta'
import type { IUser } from '@shared/types'
import { Button, IconComponent } from '@shared/ui'
import { Layout } from '@widgets/layout'
import { FormEnvelop } from '@widgets/upload-photo'
import type { GetStaticProps } from 'next'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useCallback, useRef, useState } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const SLIDER_SLIDES = [
  {
    image: model1,
    key: 1,
  },
  {
    image: model2,
    key: 2,
  },
  {
    image: model3,
    key: 3,
  },
  {
    image: model4,
    key: 4,
  },
  {
    image: model5,
    key: 5,
  },
  {
    image: model6,
    key: 6,
  },
  {
    image: model7,
    key: 7,
  },
  {
    image: model8,
    key: 8,
  },
  {
    image: model9,
    key: 9,
  },
  {
    image: model10,
    key: 10,
  },
  {
    image: model11,
    key: 11,
  },
  {
    image: model12,
    key: 12,
  },
  {
    image: model13,
    key: 13,
  },
  {
    image: model14,
    key: 14,
  },
  {
    image: model15,
    key: 15,
  },
  {
    image: model16,
    key: 16,
  },
  {
    image: model17,
    key: 17,
  },
  {
    image: model18,
    key: 18,
  },
  {
    image: model19,
    key: 19,
  },
  {
    image: model20,
    key: 20,
  },
  {
    image: model21,
    key: 21,
  },
  {
    image: model22,
    key: 22,
  },
  {
    image: model23,
    key: 23,
  },
  {
    image: model24,
    key: 24,
  },
  {
    image: model25,
    key: 25,
  },
]

export function Home() {
  const isMob = useIsMob()

  const { t } = useTranslation()

  const [loginModal, setLoginModal] = useState(false)
  const [pdModal, setPdModal] = useState(false)

  const [userData, setUserData] = useState<IUser | null>(null)

  const giftsReference = useRef(null)

  const handlePersonalCabinet = useCallback(() => {
    if (userData) setPdModal(true)
    else setLoginModal(true)
  }, [userData])

  return (
    <Layout
      Meta={
        <Meta
          description="Приобретайте новые яйца kinder harry potter joy и выигрывайте призы!"
          title="Kinder Қазақстан | Акция Harry Potter"
        />
      }
    >
      <Layout.Header />
      <Layout.Main className="flex flex-1 flex-col">
        <section id="main">
          <div className="relative mx-auto mt-7 flex w-max items-start px-5 max-2xl:w-full max-xl:hidden">
            <div className="mt-[3.125rem] w-full max-w-[22.5rem]">
              <Image
                src={harryPotterLogo}
                alt="harry potter logo"
                className="aspect-[172/42] w-[10.75rem]"
              />
              <h1 className="text-gradient mt-12 text-[3.75rem] font-bold uppercase leading-[4rem]">
                {t('MAIN.TITLE.FIRST')}
              </h1>
              <h5 className="mt-2 text-4xl font-bold leading-9 text-[#934A20]">
                {t('MAIN.TITLE.SECOND')}
              </h5>
            </div>
            <div>
              <Image
                src={poster}
                alt="poster kinder joy harry potter"
                className="aspect-[624/494] w-full max-w-[39rem]"
              />
            </div>
            <Image
              src={kinder2}
              alt="kinder"
              className="absolute bottom-[-300px] left-[-30px] z-10 aspect-[335/400] w-[20.9375rem] rotate-[-38deg] max-xl:bottom-[-120%] max-xl:right-[-3.125rem] max-xl:left-auto max-xl:rotate-[-30deg]"
            />
          </div>
          <Image
            src={divider}
            alt="divider"
            className="h-[3.5rem] w-full object-cover object-center max-xl:hidden"
          />
          {/* mobile section */}
          <div className="hidden pt-5 max-xl:block">
            <Image
              src={harryPotterLogo}
              alt="harry potter logo"
              className="ml-auto mr-8 aspect-[205/50] w-[12.8125rem]"
            />
            <Image
              src={posteMob}
              alt="mobile poster"
              className="aspect-[378/304] w-full"
            />
            <Image
              src={divider}
              alt="divider"
              className="h-[3rem] w-full object-cover object-center"
            />
          </div>
        </section>
        <section ref={giftsReference} id="gifts" className="relative  overflow-hidden">
          <div className="relative hidden px-6 pt-[4.3125rem] pb-11 max-xl:block">
            <Image
              src={kinder2}
              alt="kinder"
              className="absolute top-4 right-[-15%] z-10 aspect-[266/313] w-[16.625rem] rotate-[-30deg]"
            />
            <div className="mb-16 w-full max-w-[11.5rem] text-center">
              <h1 className="text-gradient text-[2.5rem] font-bold uppercase leading-[2.5rem]">
                {t('MAIN.TITLE.FIRST')}
              </h1>
              <h5 className="mt-1 text-lg font-bold leading-[1.125rem] text-[#934A20]">
                {t('MAIN.TITLE.SECOND')}
              </h5>
            </div>
            <div className="flex items-start gap-9">
              <Image
                src={newColelction}
                alt="new collection"
                className="aspect-[73/29] w-[4.5625rem]"
              />
              <Image
                src={funkoPop}
                alt="funko pop"
                className="mt-[0.625rem] aspect-[73/25] w-[4.5625rem]"
              />
            </div>
          </div>
          <div className="mx-auto flex w-full max-w-[62.0625rem] px-5 max-xl:flex-col max-xl:px-0">
            <PrizesTextBlock sectionRef={giftsReference} />
            <Prizes />
          </div>
        </section>
        <section id="rules">
          <div className="mx-auto mt-[3.75rem] w-full max-w-[59.0625rem] max-lg:mt-20">
            <h1 className="top-6 text-center text-[3.75rem] font-bold leading-[3.75rem] text-primary-text max-lg:sticky max-lg:text-[2.25rem] max-lg:leading-[2.25rem]">
              {t('RULES.TITLE')}
            </h1>
            <Rules />
          </div>
        </section>
        <section
          id="upload-photo"
          className="relative overflow-hidden px-4 pb-[3.75rem] max-lg:pb-4"
        >
          <FormEnvelop />
          <div className="mt-8 flex justify-center">
            <Button onClick={handlePersonalCabinet} variant="primary">
              {t('UPLOAD_FORM.PERSONAL_CABINET')}
            </Button>
          </div>
        </section>
        <section id="about" className="overflow-clip pt-[3.75rem] max-lg:pt-8">
          <h1 className="text-center text-[3.75rem] font-bold leading-[3.75rem] text-primary-text max-lg:text-[2.25rem] max-lg:leading-[2.25rem]">
            {t('ABOUT.TITLE.TOP')}
            <br />
            {t('ABOUT.TITLE.BOTTOM')}
          </h1>
          <h5 className="mt-2 text-center text-[2.25rem] font-bold leading-[2.25rem] text-[#5C341B] max-lg:text-[1.25rem] max-lg:leading-[1.25rem]">
            {t('ABOUT.SUB_TITLE.TOP')}
            <br />
            {t('ABOUT.SUB_TITLE.BOTTOM')}
          </h5>
          <div className="mx-auto mt-[2.0625rem] flex w-full max-w-[51.25rem] items-center justify-between max-lg:flex-col">
            <Image src={kinder} alt="kinder" className="aspect-[352/384] max-w-[22rem]" />
            <article className="w-full max-w-[25.625rem] text-left text-[30px] max-lg:mt-5 max-lg:text-center max-lg:text-xl">
              <p>{t('ABOUT.TEXT_BLOCK.FIRST')}</p>
              <p className="mt-4 max-lg:mt-6">
                {t('ABOUT.TEXT_BLOCK.SECOND.TOP')}
                <br />
                {t('ABOUT.TEXT_BLOCK.SECOND.BOTTOM')}
              </p>
            </article>
          </div>
          <div className="relative mt-[10.75rem] mb-[7.6rem]">
            <Swiper
              loop
              modules={[Navigation]}
              navigation={{
                nextEl: '#next',
                prevEl: '#prev',
                enabled: true,
              }}
              spaceBetween={isMob ? 0 : 20}
              slidesPerView={isMob ? 1 : 3}
              centeredSlides
            >
              {SLIDER_SLIDES.map((slide) => (
                <SwiperSlide key={slide.key} className="transition-transform">
                  <Image
                    src={slide.image}
                    alt="model"
                    className="aspect-[390/374] w-[24.375rem] select-none max-lg:mx-auto"
                  />
                </SwiperSlide>
              ))}
              <button
                id="prev"
                className="absolute top-[50%] left-[32%] z-10 translate-y-[-50%] max-lg:left-[10%]"
              >
                <IconComponent name="arrow" />
              </button>
              <button
                id="next"
                className="absolute top-[50%] right-[32%] z-10 translate-y-[-50%] rotate-180 max-lg:right-[10%]"
              >
                <IconComponent name="arrow" />
              </button>
            </Swiper>
            <IconComponent
              name="egg"
              className="absolute left-[50%] top-[50%] z-[-1] translate-x-[-50%] translate-y-[-50%]"
            />
          </div>
          <div className="flex w-full items-center justify-center gap-5 pt-[1.875rem] max-lg:flex-col">
            <Button variant="secondary"> {t('ABOUT.BUTTONS.TELEGRAM')}</Button>
            <Button variant="secondary">
              <a href="/ПРАВИЛА АКЦИИ HARRY POTTER KINDER JOY.docx" target="_blank">
                {t('ABOUT.BUTTONS.CONDITIONS')}
              </a>
            </Button>
          </div>
        </section>
        <section id="downloads" className="py-[3.75rem]">
          <div className="mx-auto flex w-full max-w-[36.75rem] items-start max-lg:flex-col max-lg:items-center ">
            <div className="mt-6 max-lg:order-2 max-lg:flex max-lg:gap-2">
              <button className="mb-4 max-lg:mb-0">
                <Image
                  src={appStoreDownload}
                  alt="download via app store"
                  className="aspect-[157/52] w-full max-w-[9.8125rem]"
                />
              </button>
              <button>
                <Image
                  src={playMarketDownload}
                  alt="download via play market"
                  className="aspect-[157/52] w-full max-w-[9.8125rem]"
                />
              </button>
            </div>
            <Image
              src={downloadPoster}
              alt="download kinder app"
              className="aspect-[378/196] w-full max-w-[23.625rem] max-lg:order-1"
            />
          </div>
        </section>
        <LoginModal
          setUserData={setUserData}
          opened={loginModal}
          setPdModal={(value) => setPdModal(value)}
          setOpened={(value) => setLoginModal(value)}
        />
        <PersonalCabinetModal
          opened={pdModal}
          userData={userData}
          setOpened={(value) => setPdModal(value)}
        />
      </Layout.Main>
      <Layout.Footer />
    </Layout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'ru', ['common'])),
      // Will be passed to the page component as props
    },
  }
}
