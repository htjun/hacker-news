import Head from "next/head"
import getStories from "src/helpers/getStories"
import getPageTitle from "src/helpers/getPageTitle"
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
  const title: string = getPageTitle(params.pid)

  return {
    props: {
      data,
      title,
    },
    revalidate: 10,
  }
}

const StoriesPage = (props: any) => {
  const { data, title, darkMode, setDarkMode } = props

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <ListView data={data} darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  )
}

export default StoriesPage
