import styled from 'styled-components'
import * as style from 'src/styles/style'

export const StoryWrapper = styled.li`
  padding-bottom: 24px;
  border-bottom: 1px solid ${style.hsl("neutral", 92)};
  margin-bottom: 24px;
`

export const StoryTitle = styled.h2`
  font-family: ${style.fontSet.heading};
  font-size: ${style.fontSize.lg};
  font-weight: ${style.fontWeight.bold};
  line-height: ${style.textLineHeight.tight};

  a {
    border-bottom: 1px solid rgba(255,255,255, 0);
    padding-bottom: 2px;
    transition: all 0.12s;

    svg {
      display: inline-block;
      width: 16px;
      height: 16px;
      vertical-align: middle;
      margin-bottom: 2px;
    }

    svg.arrow-up-right {
      margin-left: 4px;
      fill: currentColor;
      opacity: 0;
      transition: opacity 0.12s;
    }

    &:hover {
      border-bottom: 1px solid currentColor;

      svg.arrow-up-right {
        opacity: 1;
      }
    }

    &:visited {
      color: ${style.hsl("navy", 64)};
    }


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
  margin-top: 20px;
  font-size: ${style.fontSize.sm};
  color: ${style.hsl("neutral", 24)};

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

    strong {
      font-weight: ${style.fontWeight.semibold};
    }
  }
`
