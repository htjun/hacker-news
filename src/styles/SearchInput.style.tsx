import styled from 'styled-components'
import * as style from 'src/styles/style'

export const InputText = styled.input`
  width: 100%;
  padding: 4px 0;
  border-bottom: 1px solid ${style.hsl("neutral", 4)};
  margin-bottom: 48px;
  font-size: ${style.fontSize.sm};
  line-height: ${style.textLineHeight.normal};

  &:focus {
    outline: none;
  }
`
