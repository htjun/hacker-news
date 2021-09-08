import getTopStories from 'src/helpers/getTopStories'

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
    <>
      <aside>
        <h1>Hacker News</h1>
        <nav>
          <ul>
            <li>Top stories</li>
            <li>New stories</li>
            <li>Ask HN</li>
            <li>Show HN</li>
            <li>Jobs</li>
          </ul>
        </nav>
      </aside>
      <main>
        <input type="text" placeholder="Search..."/>
        <ul>
          {data.map((item: any) => {
            return <li key={item.id}>{item.title}</li>
          })}
        </ul>
      </main>
    </>
  )
}

export default TopStories
