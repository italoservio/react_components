import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  transition: all 500ms;
`

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1.75rem auto;
  min-height: calc(100% - 3.5rem);
  max-width: 500px;
`

export const ModalContent = styled.div`
  padding: 1rem 1.5rem;
  border-radius: 2px;
  background-color: #fff;
  width: 100%;
  box-shadow:
    rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px,
    rgb(0 0 0 / 12%) 0px 1px 5px 0px
`
