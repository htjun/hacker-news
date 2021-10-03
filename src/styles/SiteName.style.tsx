import styled from "styled-components"
import * as style from "src/styles/style"

export const SiteNameContainer = styled.h1`
  a {
    display: flex;
    align-items: baseline;
    margin-bottom: 50px;
    color: ${({ theme }) => theme.background.l9};
    transition: opacity 0.08s;

    &:hover {
      opacity: 0.8;
    }
  }

  svg {
    width: 48px;
    fill: currentColor;

    @media ${style.deviceSize.tablet} {
      width: clamp(24px, 10vw, 48px);
    }
  }

  s {
    display: block;
    width: 100%;
    height: 1px;
    margin-top: -1px;
    margin-left: -2px;
    background-color: currentColor;

    @media ${style.deviceSize.tablet} {
      display: none;
    }
  }
`
