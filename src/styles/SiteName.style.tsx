import styled from "styled-components"
import * as style from "src/styles/style"

export const SiteNameContainer = styled.h1`
  display: flex;
  align-items: baseline;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.background.l5};

  svg {
    width: 48px;
    fill: currentColor;
  }

  s {
    display: block;
    width: 100%;
    height: 1px;
    margin-top: -1px;
    margin-left: -2px;
    background-color: currentColor;
  }
`
