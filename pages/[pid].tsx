import getStories from "src/helpers/getStories"
import Layout from "src/components/Layout"
import Navigation from "src/components/Navigation"
import SearchInput from "src/components/SearchInput"
import Stories from "src/components/Stories"
import Modal from "src/components/Modal"
import useStoryViewer from "src/hooks/useStoryViewer"

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: "new" } },
      { params: { pid: "ask" } },
      { params: { pid: "show" } },
      { params: { pid: "jobs" } },
    ],
    fallback: true,
  }
}

export async function getStaticProps(context: any) {
  const { params } = context

  const data = await getStories(`/${params.pid}`)
  return {
    props: {
      data,
    },
    revalidate: 10,
  }
}

const StoriesPage = ({ data }: any) => {
  const { modalOn, showStory, hideStory, activeStory } = useStoryViewer()

  return (
    <Layout>
      <Navigation />
      <main>
        <SearchInput />
        <Stories data={data} showStory={showStory} />
      </main>
      {modalOn && <Modal hideStory={hideStory} activeStory={activeStory} />}
    </Layout>
  )
}

export default StoriesPage
