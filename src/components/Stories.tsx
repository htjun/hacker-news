import { StoriesWrapper } from "src/styles/Stories.style"
import Story from "src/components/Story"

const Stories = (props: any) => {
  const { data } = props

  return (
    <StoriesWrapper>
      {data &&
        data.map((item: any, index: number) => {
          return <Story key={item ? item.id : index} data={item && item} />
        })}
    </StoriesWrapper>
  )
}

export default Stories
