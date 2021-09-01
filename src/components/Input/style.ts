import styled, { css } from 'styled-components'
import { StyleLabelProps } from './types'

const FocusStyle = css``

export const InputContainer = styled.div<StyleLabelProps>`
  position: relative;
  display: flex;
  align-items: center;
  grid-gap: 5px;
  margin-top: 5px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 2px 1px;
  transition: all 250ms;

  label {
    width: 100%;
  }

  span {
    transition: all ease-in-out 150ms;
    color: #555;
    position: absolute;
    left: 0.5rem;

    ${({ focused }) => focused ? `
      top: -.45rem;
      font-size: 13px;
      padding: 0 .25rem;
    ` : `
      top: .75rem;
      font-size: 18px;
      padding: 0;
    `}
  }
`

export const Input = styled.input`
  height: 45px;
  width: 100%;
  padding: 0 0.75rem;
  font-size: 16px;
  border: 0;
  border-radius: 5px;
  color: #555;
`
