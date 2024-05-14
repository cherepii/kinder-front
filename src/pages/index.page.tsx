import appStoreDownload from '@public/assets/images/app-store-download.png'
import divider from '@public/assets/images/divider.png'
import dividerSmall from '@public/assets/images/divider-small.png'
import downloadPoster from '@public/assets/images/download-poster.png'
import ellipseBg from '@public/assets/images/ellipse-bg.png'
import funkoPop from '@public/assets/images/funko-pop.png'
import playMarketDownload from '@public/assets/images/google-play-download.png'
import harryPotterLogo from '@public/assets/images/harry-potter-logo.png'
import headphones from '@public/assets/images/headphones.png'
import kinder from '@public/assets/images/kinder.png'
import kinder2 from '@public/assets/images/kinder-2.png'
import meloman from '@public/assets/images/meloman.png'
import model1 from '@public/assets/images/model-1.png'
import model2 from '@public/assets/images/model-2.png'
import model3 from '@public/assets/images/model-3.png'
import model4 from '@public/assets/images/model-4.png'
import model5 from '@public/assets/images/model-5.png'
import model6 from '@public/assets/images/model-6.png'
import newColelction from '@public/assets/images/new-collection.png'
import phone from '@public/assets/images/phone.png'
import poster from '@public/assets/images/poster.png'
import posteMob from '@public/assets/images/poster-mob.png'
import rules1 from '@public/assets/images/rules-1.png'
import rules2 from '@public/assets/images/rules-2.png'
import rules3 from '@public/assets/images/rules-3.png'
import { useIsMob } from '@shared/lib/hooks'
import { Meta } from '@shared/meta'
import { Button, IconComponent } from '@shared/ui'
import { Layout } from '@widgets/layout'
import { FormEnvelop } from '@widgets/upload-photo'
import Image from 'next/image'
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
]

export function Home() {
  const isMob = useIsMob()

  return (
    <Layout Meta={<Meta description="Unistory next" title="Unistory" />}>
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
                Откройте мир волшебства
              </h1>
              <h5 className="mt-2 text-4xl font-bold leading-9 text-[#934A20]">
                Соберите новую коллекцию Harry Potter Kinder Joy и выигрываейте призы!
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
              className="absolute bottom-[-300px] left-[-30px] aspect-[335/400] w-[20.9375rem] rotate-[-38deg] max-xl:bottom-[-120%] max-xl:right-[-3.125rem] max-xl:left-auto max-xl:rotate-[-30deg]"
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
        <section id="gifts" className="overflow-hidden">
          <div className="relative hidden px-6 pt-[4.3125rem] pb-11 max-xl:block">
            <Image
              src={kinder2}
              alt="kinder"
              className="absolute top-0 right-0 aspect-[266/313] w-[16.625rem] rotate-[-30deg]"
            />
            <div className="mb-16 w-full max-w-[11.5rem] text-center">
              <h1 className="text-gradient mt-12 text-[2.5rem] font-bold uppercase leading-[2.5rem]">
                Откройте мир волшебства
              </h1>
              <h5 className="mt-1 text-lg font-bold leading-[1.125rem] text-[#934A20]">
                Соберите новую коллекцию Harry Potter Kinder Joy и выигрываейте призы!
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
          <div className="mx-auto flex w-full max-w-[62.0625rem] px-5 max-xl:flex-col">
            <div className="relative pb-[13.25rem] pt-[19.625rem] text-secondary-text max-xl:pt-10 max-xl:text-center max-lg:pb-0">
              <h1 className="text-[3.75rem] font-bold leading-[3.75rem] text-primary-text max-lg:text-[2.25rem] max-lg:leading-[2.25rem]">
                Призы
              </h1>
              <h3 className="mt-[1.875rem] font-bold max-lg:text-[2.25rem] max-lg:leading-[2.25rem]">
                Iphone 15 Pro
                <span className="block text-[1.875rem] font-normal leading-[1.75rem] max-lg:text-[1.25rem] max-lg:leading-[1.5rem]">
                  с чехлом Harry Potter
                </span>
              </h3>
              <h3 className="my-[1.875rem] text-[3rem] font-bold leading-[3rem] max-lg:text-[2.25rem] max-lg:leading-[2.25rem]">
                Наушники Air Max
              </h3>
              <h3 className="mt-[1.875rem] text-[3rem] font-bold leading-[3rem]">
                Сертификат 100 000 ₸
                <span className="block text-[1.875rem] font-normal leading-[1.75rem] max-lg:text-[1.25rem] max-lg:leading-[1.5rem]">
                  в магазин Meloman
                  <br />
                  на коллекцию Harry Potter
                </span>
              </h3>
              <IconComponent
                name="giftsEgg"
                className="absolute top-[4.625rem] left-[-42%] z-[-1] rotate-[-12deg] max-xl:top-[-12rem] max-xl:left-[-14%]"
              />
            </div>
            <div className="relative top-[9.625rem] flex flex-1 max-lg:top-0 max-lg:pt-[34.375rem]">
              <Image
                draggable={false}
                src={headphones}
                alt="headphones"
                className="absolute right-[13.4375rem] top-[3.125rem] z-[3] aspect-[348/478] w-[23.625rem] rotate-[-50deg] max-lg:top-[3.375rem] max-lg:right-[initial] max-lg:left-[-6rem] max-lg:w-[21.5625rem]"
              />
              <Image
                draggable={false}
                src={phone}
                alt="phone"
                className="absolute right-0 top-0 z-[1] aspect-[302/473] w-[18.875rem] rotate-[41deg] max-lg:top-[3.5rem] max-lg:right-[4.375rem] max-lg:w-[14.5625rem]"
              />
              <Image
                draggable={false}
                src={meloman}
                alt="meloman"
                className="absolute right-0 top-[24.1875rem] z-[2] aspect-[261/266] w-[16.3125rem] rotate-[27deg] max-lg:top-[initial] max-lg:bottom-[-1.875rem] max-lg:right-3 max-lg:w-[14.6875rem]"
              />
              <Image
                draggable={false}
                src={ellipseBg}
                alt="ellipse bg"
                className="absolute right-[-18.5rem] top-[0] h-[640px] max-w-[1200px]"
              />
            </div>
          </div>
        </section>
        <section
          id="rules"
          className="mx-auto mt-[3.75rem] w-full max-w-[59.0625rem] max-lg:mt-20"
        >
          <h1 className="text-center text-[3.75rem] font-bold leading-[3.75rem] text-primary-text max-lg:text-[2.25rem] max-lg:leading-[2.25rem]">
            Правила участия
          </h1>
          <div className="relative mt-[3.75rem] flex w-full flex-wrap items-start justify-center max-lg:mt-6">
            <div className="relative mt-10 flex h-[31.5625rem] w-full max-w-[19.6875rem] rotate-[-1deg] flex-col rounded-[1.75rem] bg-[#F1B72B] py-5 px-[1.125rem] text-center max-lg:mt-0">
              <Image src={dividerSmall} alt="small divider" className="w-full" />
              <p className="mt-12 mb-11 text-[1.875rem] font-bold leading-[1.875rem]">
                Приобретайте
                <br /> Kinder Joy Harry Potter
              </p>
              <Image src={rules1} alt="rule" className="aspect-[260/216] w-full" />
              <Image src={dividerSmall} alt="small divider" className="mt-auto w-full" />
            </div>
            <div className="top-[1.75rem] left-[52%] ml-[-2rem] flex h-[31.5625rem] w-full max-w-[19.6875rem] rotate-[6deg] flex-col rounded-[1.75rem] bg-[#F3410E] py-5 px-[1.125rem] text-center drop-shadow-card max-lg:absolute max-lg:ml-0 max-lg:translate-x-[-50%]">
              <Image src={dividerSmall} alt="small divider" className="w-full" />
              <p className="mt-12 mb-11 text-[1.875rem] font-bold leading-[1.875rem] text-secondary-text">
                Сделайте фото
                <br /> игрушки или фигурки
                <br /> из коллекции
              </p>
              <Image src={rules2} alt="rule" className="aspect-[298/231] w-full" />
              <Image src={dividerSmall} alt="small divider" className="mt-auto w-full" />
            </div>
            <div className="top-[3.5rem] left-[50%] mt-12 ml-[-0.25rem] flex h-[31.5625rem] w-full max-w-[19.6875rem] rotate-[-2.7deg] flex-col rounded-[1.75rem] bg-[#FFFFFF] py-5 px-[1.125rem] text-center drop-shadow-card max-lg:absolute max-lg:ml-0 max-lg:mt-0 max-lg:translate-x-[-50%] max-lg:rotate-[-4deg]">
              <Image src={dividerSmall} alt="small divider" className="w-full" />
              <p className="mt-12 text-[2.25rem] font-bold leading-[2.25rem]">
                Загрузите фото
              </p>
              <p className="mb-[2rem] text-xl font-normal leading-[1.1rem]">
                Чем больше фотографий –<br /> тем больше шансов на выигрыш!
              </p>
              <Image src={rules3} alt="rule" className="aspect-[266/231] w-full px-5" />
              <Image src={dividerSmall} alt="small divider" className="mt-auto w-full" />
            </div>
          </div>
        </section>
        <section
          id="upload-photo"
          className="overflow-hidden px-4 pb-[3.75rem] max-lg:pb-4"
        >
          <FormEnvelop />
          <div className="mt-8 flex justify-center">
            <Button variant="primary">Личный кабинет</Button>
          </div>
        </section>
        <section id="about" className="pt-[3.75rem] max-lg:pt-8">
          <h1 className="text-center text-[3.75rem] font-bold leading-[3.75rem] text-primary-text max-lg:text-[2.25rem] max-lg:leading-[2.25rem]">
            О коллекции
            <br /> Kinder Joy Harry Potter
          </h1>
          <h5 className="mt-2 hidden text-center text-[1.25rem] leading-[1.25rem] text-[#5C341B] max-lg:block">
            Откройте яйцо и найдите
            <br /> своего проводника в мир магии!
          </h5>
          <div className="mx-auto mt-[2.0625rem] flex w-full max-w-[51.25rem] items-center justify-between max-lg:flex-col">
            <Image src={kinder} alt="kinder" className="aspect-[352/384] max-w-[22rem]" />
            <article className="w-full max-w-[25.625rem] text-left text-[30px] max-lg:mt-5 max-lg:text-center max-lg:text-xl">
              <p>
                Им может стать директор Хогвартса Альбус Дамблдор, знаток магических
                фолиантов Гермиона Грейнджер или даже сам Гарри Поттер.
              </p>
              <p className="mt-4 max-lg:mt-6">
                Kinder Joy “Harry Potter” - новая коллекция фигурок и гаджетов с
                персонажами знаменитой волшебной франшизы. В ней вы найдете уникальные
                фигурки funko-персонажей, стикеры, закладки, браслеты и насадки для ручек.
                <br />
                Каждая из них - ваш шанс на выигрыш!
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
                className="absolute top-[50%] left-[32%] z-10 translate-y-[-50%] max-lg:left-[15%]"
              >
                <IconComponent name="arrow" />
              </button>
              <button
                id="next"
                className="absolute top-[50%] right-[32%] z-10 translate-y-[-50%] rotate-180 max-lg:right-[15%]"
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
            <Button variant="secondary">Telegram-бот</Button>
            <Button variant="secondary">Условия участия </Button>
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
      </Layout.Main>
      <Layout.Footer />
    </Layout>
  )
}

export default Home
