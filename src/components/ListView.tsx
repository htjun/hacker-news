import Layout from "src/components/Layout"
import SiteName from "src/components/SiteName"
import Navigation from "src/components/Navigation"
import StoryController from "src/components/StoryController"
import Stories from "src/components/Stories"

const ListView = (props: any) => {
  const { data, darkMode, setDarkMode } = props

  return (
    <Layout>
      <aside>
        <SiteName />
        <Navigation />
      </aside>
      <main>
        <StoryController darkMode={darkMode} setDarkMode={setDarkMode} />
        <Stories data={data} />
      </main>
    </Layout>
  )
}

export default ListView
