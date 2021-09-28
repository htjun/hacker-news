import Layout from "src/components/Layout"
import ItemView from "src/components/ItemView"

const baseUrl = "https://hacker-news.firebaseio.com/v0/item/"

export async function getServerSideProps(context: any) {
  const { sid } = context.query

  const res = await fetch(`${baseUrl}${sid}.json`)
  const data = await res.json()

  if (!data) {
    return { notFound: true }
  } else {
    return { props: { data } }
  }
}

const StoryPage = (props: any) => {
  const { data } = props
  return <ItemView data={data} />
}

export default StoryPage
