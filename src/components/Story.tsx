import { StoryWrapper, StoryInfo, StoryTitle, Url, StoryDetails } from 'src/styles/Story.style'
import shortenUrl from 'src/helpers/shortenUrl'
import IconArrowUpRight from 'src/assets/icons/IconArrowUpRight.svg'

const Story = (props: any) => {
  const { data } = props

  return (
    <StoryWrapper>
      <StoryTitle>
        <a href={data.url} target="_blank" rel='noreferrer'>
          <span>{data.title}</span>
          <IconArrowUpRight class="arrow-up-right" />
        </a>
      </StoryTitle>
      <StoryInfo>
        <span></span>
        <Url>{data.url && shortenUrl(data.url)}</Url>
      </StoryInfo>
      <StoryDetails>
        <li><strong>{data.score}</strong>&nbsp;points</li>
        <li><strong>{data.kids ? data.kids.length : 0}</strong>&nbsp;comments</li>
        <li>{data.time}</li>
        <li>by&nbsp;<strong>{data.by}</strong></li>
      </StoryDetails>
    </StoryWrapper>
  )
}

export default Story
