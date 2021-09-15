import { StoryWrapper, StoryInfo, StoryTitle, Url, StoryDetails } from 'src/styles/Story.style'
import shortenUrl from 'src/helpers/shortenUrl'
import dateFormatter from 'src/helpers/dateFormatter'

const Story = (props: any) => {
  const { data } = props

  if (data) {
    return (
      <StoryWrapper>
        <StoryTitle>
          <a href={data.url} target="_blank" rel='noreferrer'>
            {data.title}
          </a>
        </StoryTitle>
        <StoryInfo>
          <span></span>
          <Url>{data.url && shortenUrl(data.url)}</Url>
        </StoryInfo>
        <StoryDetails>
          <li><strong>{data.score}</strong>&nbsp;points</li>
          <li><strong>{data.kids ? data.kids.length : 0}</strong>&nbsp;comments</li>
          <li>{dateFormatter(data.time)}</li>
          <li>by&nbsp;<strong>{data.by}</strong></li>
        </StoryDetails>
      </StoryWrapper>
    )
  } else {
    return null
  }

}

export default Story
