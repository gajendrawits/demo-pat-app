import Button from 'components/Button'
import React from 'react'
import { AlertContent, ButtonWrapper, Container, MainContainer } from 'styles/components/AlertModal'

interface AlertModalProps {
  Content?: string
  isClose: () => void
}

const AlertModal = ({ Content, isClose }: AlertModalProps) => {
  const handleClose = () => {
    isClose()
  }

  return (
    <>
      <MainContainer />
      <Container>
        <AlertContent>
          <h2>{Content} </h2>
        </AlertContent>
        <ButtonWrapper>
          <Button label="Ok" type="submit" onClick={handleClose} />
        </ButtonWrapper>
      </Container>
    </>
  )
}

export default AlertModal
