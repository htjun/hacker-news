import getStories from "src/helpers/getStories"
import ListView from "src/components/ListView"

export async function getStaticProps() {
  const data = await getStories("/")
  return {
    props: {
      data,
    },
    revalidate: 10,
  }
}

const TopStories = (props: any) => {
  const { data, darkMode, setDarkMode } = props

  return <ListView data={data} darkMode={darkMode} setDarkMode={setDarkMode} />
}

export default TopStories
