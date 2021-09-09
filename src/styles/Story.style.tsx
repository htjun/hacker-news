import styled from 'styled-components'
import * as style from 'src/styles/style'

export const StoryWrapper = styled.li`
  padding-bottom: 24px;
  border-bottom: 1px solid ${style.hsl("neutral", 92)};
  margin-bottom: 24px;

  h2 {
    font-family: ${style.fontSet.heading};
    font-size: ${style.fontSize.lg};
    line-height: ${style.textLineHeight.tight};
  }
`

export const StoryInfo = styled.div`
  margin-top: 4px;
`

export const Url = styled.span`
  font-size: ${style.fontSize.sm};
  color: ${style.hsl("neutral", 48)};
`

export const StoryDetails = styled.ul`
  display: flex;
  margin-top: 16px;
  font-size: ${style.fontSize.sm};
  color: ${style.hsl("neutral", 12)};

  li {
    margin-right: 8px;
    display: flex;
    align-items: center;

    &::after {
      content: "";
      display: block;
      width: 1px;
      height: 12px;
      background-color: ${style.hsl("neutral", 92)};
      margin-left: 8px;
    }

    &:last-of-type::after {
      display: none;
    }
  }
`
