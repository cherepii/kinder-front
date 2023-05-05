import { Meta } from '@shared/meta'
import { Container } from '@shared/ui'
import { Layout } from '@widgets/layout'

export function Home() {
  return (
    <Layout Meta={<Meta description="Unistory next" title="Unistory" />}>
      <Layout.Header />
      <Layout.Main>
        <Container>unistory next template</Container>
      </Layout.Main>
      <Layout.Footer />
    </Layout>
  )
}

export default Home
