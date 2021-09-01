import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Modal } from './Modal'

describe('[COMPONENT] Modal', () => {

  it('Should not stay on the screen when "isOpen" is false', () => {
    const show = false

    render(
      <Modal isOpen={show}>
        <h1>Hello modal!</h1>
      </Modal>
    )

    const modalElement = screen.queryByText(/hello modal!/i)
    expect(modalElement).not.toBeInTheDocument()
  })

  it('Should stay on the screen when "isOpen" is true', () => {
    const show = true

    render(
      <Modal isOpen={show}>
        <h1>Hello modal!</h1>
      </Modal>
    )

    const modalElement = screen.queryByText(/hello modal!/i)
    expect(modalElement).toBeInTheDocument()
  })
})
