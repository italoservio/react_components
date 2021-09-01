import React, { ChangeEvent, useState } from 'react'
import { Modal } from '../../components/Modal/Modal'
import { Button } from '../../components/Button/Button'
import { Input } from '../../components/Input/Input'

export function Home() {
  const [modalShow, setModalShow] = useState(false)
  const [val, setVal] = useState('')

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

      <Input
        label='E-mail'
        value={val}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setVal(e.target.value)}
      />
    </div>
  )
}
