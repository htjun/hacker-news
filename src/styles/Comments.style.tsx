import styled from "styled-components"
import * as style from "src/styles/style"

export const CommentsContainer = styled.ul`
  padding-left: 16px;

  details {
    color: ${({ theme }) => theme.text.neutral.l3};

    summary {
      font-size: ${style.fontSize.sm};
      margin-bottom: 16px;
      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.text.neutral.l2};
      }
    }
  }
`

export const CommentContainer = styled.li`
  padding-left: 16px;
  margin-bottom: 48px;
  border-left: 2px solid ${({ theme }) => theme.background.l3};
  color: ${({ theme }) => theme.text.neutral.l1};
  line-height: ${style.textLineHeight.normal};

  p,
  pre {
    margin: 1em 0;
    white-space: normal;
  }

  a {
    text-decoration: underline;
  }
`

export const Commenter = styled.div`
  margin-top: 24px;
  margin-bottom: 16px;
  font-size: ${style.fontSize.sm};
  color: ${({ theme }) => theme.text.navy.l3};
`
