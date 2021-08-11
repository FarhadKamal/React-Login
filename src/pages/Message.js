import React, { useEffect } from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal()
    }, 3000)
  })
  return <Alert variant='secondary'>{modalContent}</Alert>
}

export default Message
