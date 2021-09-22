import {
  StoryWrapper,
  StoryInfo,
  StoryTitle,
  Url,
  StoryDetailsContainer,
} from "src/styles/Story.style"
import shortenUrl from "src/helpers/shortenUrl"
import dateFormatter from "src/helpers/dateFormatter"

const StoryDetails = ({ data }: any) => {
  if (data) {
    return (
      <StoryDetailsContainer>
        <li>
          <strong>{data.score}</strong>&nbsp;points
        </li>
        <li>
          <strong>{data.kids ? data.kids.length : 0}</strong>&nbsp;comments
        </li>
        <li>{dateFormatter(data.time)}</li>
        <li>
          by&nbsp;<strong>{data.by}</strong>
        </li>
      </StoryDetailsContainer>
    )
  } else {
    return null
  }
}

const Story = (props: any) => {
  const { data, showStory } = props

  if (data) {
    if ("url" in data) {
      return (
        <StoryWrapper>
          <StoryTitle>
            <a href={data.url} target="_blank" rel="noreferrer">
              {data.title}
            </a>
          </StoryTitle>
          <StoryInfo>
            <span></span>
            <Url>{data.url && shortenUrl(data.url)}</Url>
          </StoryInfo>
          <StoryDetails data={data} />
        </StoryWrapper>
      )
    } else {
      return (
        <StoryWrapper>
          <StoryTitle>
            <a onClick={() => showStory(data.id)}>{data.title}</a>
          </StoryTitle>
          <StoryDetails data={data} />
        </StoryWrapper>
      )
    }
  } else {
    return null
  }
}

export default Story
