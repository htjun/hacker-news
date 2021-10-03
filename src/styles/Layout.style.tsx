import styled from "styled-components"
import * as style from "src/styles/style"

export const LayoutOuter = styled.div`
  display: grid;
  place-items: center;
`

export const LayoutInner = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  padding: 48px;

  aside {
    display: block;
    flex: 0 0 200px;
    margin-right: 64px;

    @media ${style.deviceSize.tablet} {
      margin-right: 0;
    }
  }

  main {
    display: block;
    width: 100%;
    flex-grow: 1;
  }

  @media ${style.deviceSize.tablet} {
    flex-direction: column;
    padding: 24px;
  }
`
