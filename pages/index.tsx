import getTopStories from 'src/helpers/getTopStories'
import Layout from 'src/components/Layout'
import Navigation from 'src/components/Navigation'

export async function getStaticProps() {
  const data = await getTopStories()
  return {
    props: {
      data
    }
  }
}


const TopStories = ({ data }: any) => {
  return (
    <Layout>
      <Navigation />
      <main>
        <input type="text" placeholder="Search..."/>
        <ul>
          {data.map((item: any) => {
            return <li key={item.id}>{item.title}</li>
          })}
        </ul>
      </main>
    </Layout>
  )
}

export default TopStories
