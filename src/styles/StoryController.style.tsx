import styled from "styled-components"
import * as style from "src/styles/style"

export const ControllerContainer = styled.div`
  display: flex;
`

export const InputText = styled.input`
  width: 100%;
  padding-bottom: 4px;
  border-bottom: 1px solid ${({ theme }) => theme.background.l5};
  margin-bottom: 48px;
  font-size: ${style.fontSize.sm};
  line-height: ${style.textLineHeight.normal};
  color: ${({ theme }) => theme.text.neutral.l1};
  transition: all 0.12s linear;

  &:focus {
    outline: none;
    border-color: ${style.hsl("blue", 64)};
  }
`

export const DarkModeButton = styled.a`
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  margin-left: 16px;
  cursor: pointer;
  border-radius: 50%;

  &:hover {
    background-color: ${({ theme }) => theme.background.l2};
  }

  svg {
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.background.l5};
  }
`
