import { StoriesWrapper } from "src/styles/Stories.style"
import Story from "src/components/Story"

const Stories = (props: any) => {
  const { data, searchTerm } = props

  return (
    <StoriesWrapper>
      {data &&
        data
          .filter((d: any) => {
            if (d) {
              return (
                d.title.toLowerCase().search(searchTerm.toLowerCase()) != -1
              )
            }
          })
          .map((item: any, index: number) => {
            return <Story key={item ? item.id : index} data={item && item} />
          })}
    </StoriesWrapper>
  )
}

export default Stories
