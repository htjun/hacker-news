import getStories from "src/helpers/getStories"
import Layout from "src/components/Layout"
import Navigation from "src/components/Navigation"
import SearchInput from "src/components/SearchInput"
import Stories from "src/components/Stories"
import Modal from "src/components/Modal"
import useStoryViewer from "src/hooks/useStoryViewer"

export async function getStaticProps() {
  const data = await getStories("/")
  return {
    props: {
      data,
    },
    revalidate: 10,
  }
}

const TopStories = ({ data }: any) => {
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

export default TopStories
