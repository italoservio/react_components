import React from 'react'
import * as S from './styles'
import * as I from './types'

export function Modal({ isOpen, children }: I.ModalProps) {
  return (
    <>
      {isOpen && (
        <S.Overlay>
          <S.ModalContainer>
            <S.ModalContent>{children}</S.ModalContent>
          </S.ModalContainer>
        </S.Overlay>
      )}
    </>
  )
}
