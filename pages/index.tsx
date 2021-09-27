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

const TopStories = ({ data }: any) => {
  return <View data={data} />
}

export default TopStories
