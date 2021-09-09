import { StoryWrapper } from 'src/styles/Story.style'

const Story = (props: any) => {
  const { data } = props

  return (
    <StoryWrapper>
      <h2>{data.title}</h2>
      <div>
        <span></span>
        <span>{data.url}</span>
      </div>
      <ul>
        <li>by {data.by}</li>
        <li>{data.score} points</li>
        <li>{data.kids ? data.kids.length : 0} comments</li>
        <li>{data.time}</li>
      </ul>
    </StoryWrapper>
  )
}

export default Story
