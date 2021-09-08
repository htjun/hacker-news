import { StoriesWrapper } from 'src/styles/Stories.style'

const Stories = (props: any) => {
  const { data } = props

  return (
    <StoriesWrapper>
      {data.map((item: any) => {
        return <li key={item.id}>{item.title}</li>
      })}
    </StoriesWrapper>
  )
}

export default Stories
