import React, { useState } from 'react'
import { Modal } from '../../components/Modal/Modal'
import { Button } from '../../components/Button/Button'

export function Home() {
  const [modalShow, setModalShow] = useState(false)

  function toggleModal() {
    setModalShow((prev) => !prev)
  }

  return (
    <div>
      <h1>Modal</h1>
      <Button onClick={toggleModal}>Abrir Modal</Button>

      <Modal isOpen={modalShow}>
        <>
          <h1>Modal example</h1>
          <button onClick={toggleModal}>Close Modal</button>
        </>
      </Modal>
    </div>
  )
}
