import styled from 'styled-components'
import * as style from 'src/styles/style'

export const NavWrapper = styled.aside`
  display: block;
  width: 180px;
`

export const NavItem = styled.li`
  margin-bottom: 4px;

  a {
    display: flex;
    align-items: center;
    padding: 6px;
    border-radius: 6px;
    font-size: ${style.fontSize.sm};
    font-weight: ${style.fontWeight.medium};
    line-height: ${style.textLineHeight.normal};
    color: ${style.hsl("neutral", 64)};

    svg {
      width: 16px;
      height: 16px;
      margin-right: 8px;
      fill: currentColor;
      opacity: 0.8;
    }

    &:hover {
      background-color: ${style.hsl("neutral", 98)};
    }
  }

  &.active {
    a {
      color: ${style.hsl("neutral", 4)};
    }
  }
`
