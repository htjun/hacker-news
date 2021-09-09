import { StoryWrapper, StoryInfo, Url, StoryDetails } from 'src/styles/Story.style'
import shortenUrl from 'src/helpers/shortenUrl'

const Story = (props: any) => {
  const { data } = props

  return (
    <StoryWrapper>
      <h2>{data.title}</h2>
      <StoryInfo>
        <span></span>
        <Url>{shortenUrl(data.url)}</Url>
      </StoryInfo>
      <StoryDetails>
        <li>{data.score} points</li>
        <li>{data.kids ? data.kids.length : 0} comments</li>
        <li>{data.time}</li>
        <li>by {data.by}</li>
      </StoryDetails>
    </StoryWrapper>
  )
}

export default Story
