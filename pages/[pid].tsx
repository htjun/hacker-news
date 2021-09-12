import getStories from 'src/helpers/getStories'
import Layout from 'src/components/Layout'
import Navigation from 'src/components/Navigation'
import SearchInput from 'src/components/SearchInput'
import Stories from 'src/components/Stories'

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: 'new'} },
      { params: { pid: 'ask'} },
      { params: { pid: 'show'} },
      { params: { pid: 'jobs'} },
    ],
    fallback: true
  };
}

export async function getStaticProps(context: any) {
  const { params } = context

  const data = await getStories(`/${params.pid}`)
  return {
    props: {
      data
    }
  }
}

const StoriesPage = ({ data }: any) => {
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

export default StoriesPage
