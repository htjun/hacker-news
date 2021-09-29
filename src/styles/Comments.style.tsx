import styled from "styled-components"
import * as style from "src/styles/style"

export const CommentContainer = styled.li`
  padding-bottom: 32px;
  border-bottom: 1px solid ${({ theme }) => theme.background.l4};
  margin-bottom: 32px;
  color: ${({ theme }) => theme.text.neutral.l1};

  p {
    margin: 1em 0;
  }
`
