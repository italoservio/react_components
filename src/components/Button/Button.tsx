import React from 'react'
import * as S from './styles'
import * as I from './types'

export function Button({ children, ...args }: I.ButtonProps) {
  return (
    <S.Button { ...args }>
      { children }
    </S.Button>
  )
}
