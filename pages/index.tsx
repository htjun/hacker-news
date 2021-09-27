import getStories from "src/helpers/getStories"
import View from "src/components/View"

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

  return <View data={data} darkMode={darkMode} setDarkMode={setDarkMode} />
}

export default TopStories
