import styled from "styled-components"
import * as style from "src/styles/style"

export const ItemContainer = styled.div`
  color: ${({ theme }) => theme.text.neutral.l1};

  h1 {
    font-family: ${style.fontSet.heading};
    font-size: ${style.fontSize.xl2};
    font-weight: ${style.fontWeight.bold};
    line-height: ${style.textLineHeight.tight};
    margin-bottom: 12px;
  }

  .story-details {
    display: flex;
    margin-bottom: 24px;
    font-size: ${style.fontSize.sm};
    color: ${({ theme }) => theme.text.neutral.l2};

    li {
      margin-right: 16px;
      display: flex;
      align-items: center;

      &::after {
        content: "";
        display: block;
        width: 1px;
        height: 12px;
        background-color: ${({ theme }) => theme.background.l5};
        margin-left: 16px;
      }

      &:last-of-type::after {
        display: none;
      }
    }
  }

  article {
    padding: 24px;
    border-radius: 4px;
    font-size: ${style.fontSize.base};
    line-height: ${style.textLineHeight.loose};
    background-color: ${({ theme }) => theme.background.l2};

    p {
      margin: 1em 0;
    }
  }
`
