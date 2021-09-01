import React, { useState, FocusEvent } from 'react'
import * as S from './style'
import * as I from './types'

export function Input({
  label,
  value,
  onBlur,
  onFocus,
  ...args
}: I.InputProps) {
  const [focused, setFocused] = useState(false)

  function handleFocus(e: FocusEvent<HTMLInputElement>) {
    setFocused(true)
    onFocus && onFocus(e)
  }

  function handleBlur(e: FocusEvent<HTMLInputElement>) {
    setFocused(!!value)
    onBlur && onBlur(e)
  }

  return (
    <S.InputContainer focused={focused}>
      <label>
        <span>{label}</span>
        <S.Input
          {...args}
          onFocus={(e: FocusEvent<HTMLInputElement>) => handleFocus(e)}
          onBlur={(e: FocusEvent<HTMLInputElement>) => handleBlur(e)}
        />
      </label>
    </S.InputContainer>
  )
}
