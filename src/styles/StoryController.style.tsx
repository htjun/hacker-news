import styled from "styled-components"
import * as style from "src/styles/style"

export const ControllerContainer = styled.div`
  display: flex;
`

export const InputText = styled.input`
  width: 100%;
  padding-bottom: 4px;
  border-bottom: 1px solid ${style.hsl("navy", 24)};
  border-bottom: 1px solid ${({ theme }) => theme.background.l5};
  margin-bottom: 48px;
  font-size: ${style.fontSize.sm};
  line-height: ${style.textLineHeight.normal};
  transition: all 0.12s linear;

  &:focus {
    outline: none;
    border-color: ${style.hsl("blue", 64)};
  }
`
