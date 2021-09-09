import getTopStories from 'src/helpers/getTopStories'
import Layout from 'src/components/Layout'
import Navigation from 'src/components/Navigation'
import SearchInput from 'src/components/SearchInput'
import Stories from 'src/components/Stories'

export async function getStaticProps() {
  const data = await getTopStories()
  return {
    props: {
      data
    }
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
