import desktopImage from '@public/assets/images/site-disabled.jpeg'
import desktopImageMob from '@public/assets/images/site-disabled-mob.jpeg'
import { Meta } from '@shared/meta'
import { Layout } from '@widgets/layout'
import Image from 'next/image'

const SiteDisabledPage = () => {
  return (
    <Layout
      Meta={
        <Meta
          description="Приобретайте новые яйца kinder harry potter joy и выигрывайте призы!"
          title="Kinder Қазақстан | Акция Harry Potter"
        />
      }
    >
      <Layout.Main className="h-screen">
        <a href="https://t.me/HarryPotter_Kinder_joy_bot">
          <Image
            src={desktopImage}
            alt="image"
            className="h-full w-full object-cover object-center max-lg:hidden"
          />
          <Image
            src={desktopImageMob}
            alt="image"
            className="hidden h-full w-full object-cover object-center max-lg:block"
          />
        </a>
      </Layout.Main>
    </Layout>
  )
}

export default SiteDisabledPage
