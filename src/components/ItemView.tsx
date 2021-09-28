import Layout from "src/components/Layout"
import SiteName from "./SiteName"

const ItemView = (props: any) => {
  const { data, darkMode, setDarkMode } = props

  return (
    <Layout>
      <aside>
        <SiteName />
      </aside>
      <main>
        <h1>{data.title}</h1>
      </main>
    </Layout>
  )
}

export default ItemView
