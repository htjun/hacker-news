import styled from "styled-components"

export const LayoutOuter = styled.div`
  display: grid;
  place-items: center;
`

export const LayoutInner = styled.div`
  display: flex;
  width: 100%;
  max-width: 900px;
  margin: 48px;

  aside {
    display: block;
    width: 200px;
    margin-right: 64px;
  }

  main {
    display: block;
    width: 100%;
  }
`
