import getStories from "src/helpers/getStories"
import ListView from "src/components/ListView"

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

const StoriesPage = (props: any) => {
  const { data, darkMode, setDarkMode } = props

  return <ListView data={data} darkMode={darkMode} setDarkMode={setDarkMode} />
}

export default StoriesPage
