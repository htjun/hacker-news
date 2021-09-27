import styled from "styled-components"
import * as style from "src/styles/style"

export const NavWrapper = styled.aside`
  display: block;
  width: 200px;
  margin-right: 64px;
`

export const SiteName = styled.h1`
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

export const NavItemWrapper = styled.nav`
  position: sticky;
  top: 48px;
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
    color: ${({ theme }) => theme.text.neutral.l4};
    transition: all 0.08s linear;

    svg {
      width: 16px;
      height: 16px;
      margin-right: 8px;
      fill: currentColor;
      opacity: 0.8;
    }

    &:hover {
      color: ${({ theme }) => theme.text.neutral.l2};
      background-color: ${({ theme }) => theme.background.l2};
    }
  }

  &.active {
    a {
      color: ${({ theme }) => theme.text.navy.l1};
      background-color: ${({ theme }) => theme.background.l3};
    }
  }
`
