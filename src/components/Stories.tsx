import { StoriesWrapper } from 'src/styles/Stories.style'
import Story from 'src/components/Story'

const Stories = (props: any) => {
  const { data } = props

  return (
    <StoriesWrapper>
      {data.map((item: any) => {
        return <Story key={item.id} data={item} />
      })}
    </StoriesWrapper>
  )
}

export default Stories
