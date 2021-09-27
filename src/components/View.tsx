import Layout from "src/components/Layout"
import Navigation from "src/components/Navigation"
import StoryController from "src/components/StoryController"
import Stories from "src/components/Stories"
import Modal from "src/components/Modal"
import useStoryViewer from "src/hooks/useStoryViewer"

const View = (props: any) => {
  const { modalOn, showStory, hideStory, activeStory } = useStoryViewer()
  const { data, setDarkMode } = props

  return (
    <Layout>
      <Navigation />
      <main>
        <StoryController setDarkMode={setDarkMode} />
        <Stories data={data} showStory={showStory} />
      </main>
      {modalOn && <Modal hideStory={hideStory} activeStory={activeStory} />}
    </Layout>
  )
}

export default View
