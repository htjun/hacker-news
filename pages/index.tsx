import getStories from 'src/helpers/getStories'
import Layout from 'src/components/Layout'
import Navigation from 'src/components/Navigation'
import SearchInput from 'src/components/SearchInput'
import Stories from 'src/components/Stories'

export async function getStaticProps() {
  const data = await getStories('/')
  return {
    props: {
      data
    },
    revalidate: 10,
  }
}

const TopStories = ({ data }: any) => {
  return (
    <Layout>
      <Navigation />
      <main>
        <SearchInput />
        <Stories data={data} />
      </main>
    </Layout>
  )
}

export default TopStories
