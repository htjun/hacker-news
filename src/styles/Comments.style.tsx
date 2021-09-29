import styled from "styled-components"
import * as style from "src/styles/style"

export const CommentContainer = styled.li`
  padding-left: 16px;
  margin-bottom: 48px;
  border-left: 2px solid ${({ theme }) => theme.background.l3};
  color: ${({ theme }) => theme.text.neutral.l1};
  line-height: ${style.textLineHeight.normal};

  p {
    margin: 1em 0;
  }

  a {
    text-decoration: underline;
  }
`

export const Commenter = styled.div`
  margin-top: 24px;
  font-size: ${style.fontSize.sm};
  color: ${({ theme }) => theme.text.navy.l2};
`
