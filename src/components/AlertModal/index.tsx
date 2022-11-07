import Button from 'components/Button'
import React from 'react'
import { AlertContent, Container } from 'styles/components/AlertModal'

interface AlertModalProps {
  Content: string
}

const AlertModal = ({ Content }: AlertModalProps) => {
  return (
    <Container>
      <AlertContent>{Content}</AlertContent>
      <Button label="Ok" type="submit" />
    </Container>
  )
}

export default AlertModal
