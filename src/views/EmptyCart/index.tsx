import React from 'react'
import Button from 'components/Button'
import { CartButton, Container, Content, ContentText } from 'styles/views/EmptyCart'

const EmptyCart = () => {
  return (
    <Container>
      <Content>
        <ContentText>Your Card Is Empty!</ContentText>
        <CartButton>
          <Button label="Continue Shopping" />
        </CartButton>
      </Content>
    </Container>
  )
}

export default EmptyCart
