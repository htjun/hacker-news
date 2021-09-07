const Home = () => {
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
          <li>Story item</li>
        </ul>
      </main>
      <aside></aside>

    </>
  )
}

export default Home
