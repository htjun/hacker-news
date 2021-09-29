import { useRouter } from "next/router"
import Layout from "src/components/Layout"
import SiteName from "src/components/SiteName"
import StoryController from "src/components/StoryController"
import Comments from "src/components/Comments"
import dateFormatter from "src/helpers/dateFormatter"
import { NavItem } from "src/styles/Navigation.style"
import { ItemContainer, CommentsContainer } from "src/styles/ItemView.style"
import IconArrowLeft from "src/assets/icons/IconArrowLeft.svg"

const ItemView = (props: any) => {
  const { data, darkMode, setDarkMode } = props
  const router = useRouter()

  return (
    <Layout>
      <aside>
        <SiteName />
        <NavItem as="div">
          <a onClick={() => router.back()}>
            <IconArrowLeft />
            <span>Back to list</span>
          </a>
        </NavItem>
      </aside>
      <main>
        <StoryController darkMode={darkMode} setDarkMode={setDarkMode} />
        <ItemContainer>
          <h1>{data.title}</h1>
          <ul className="story-details">
            <li>
              Posted&nbsp;{dateFormatter(data.time)}&nbsp;by&nbsp;
              <strong>{data.by}</strong>
            </li>
            <li>
              <strong>{data.score}</strong>&nbsp;points
            </li>
          </ul>
          <article dangerouslySetInnerHTML={{ __html: data.text }} />
        </ItemContainer>
        <CommentsContainer>
          <h2>
            <strong>{data.kids ? data.kids.length : 0}</strong>&nbsp;comments
          </h2>
          <Comments data={data.kids} />
        </CommentsContainer>
      </main>
    </Layout>
  )
}

export default ItemView
