import React from 'react'
import Header from 'components/Header'
import {
  CardExit,
  CartHeader,
  CartItem,
  CartItemBreed,
  CartItemImage,
  CartItemName,
  CartItemPrice,
  CartLeftWrapper,
  CartRightWrapper,
  CheckOut,
  Container,
  ItemBio,
  ItemBreed,
  ItemName,
  ItemPrice,
  ItemsPrice,
  LeftContainer,
  LeftHeading,
  MainContainer,
  RightWrapper,
  ShippingCharge,
  ShippingChargeText,
  ShippingPrice,
  TotalPrice,
  TotalPriceText,
  TotalPriceValue,
} from 'styles/views/Cart'

const Cart = () => {
  return (
    <MainContainer>
      <Header />
      <Container>
        <CartRightWrapper>
          <RightWrapper>
            <CartHeader>My Shoping Cart Items</CartHeader>
            <CartItem>
              <CartItemImage>
                <img src="https://img.freepik.com/free-photo/gold-bengal-cat-white-space_155003-12734.jpg?size=626&ext=jpg&ga=GA1.2.1871494136.1667553133&semt=sph" />
              </CartItemImage>
              <ItemBio>
                <CartItemName>
                  <strong> Name:</strong> <ItemName> Oliver</ItemName>
                </CartItemName>
                <CartItemBreed>
                  <strong>Breed: </strong>
                  <ItemBreed>Husky</ItemBreed>
                </CartItemBreed>
                <CartItemPrice>
                  <strong>Price:</strong>
                  <ItemsPrice>₹520</ItemsPrice>
                </CartItemPrice>
              </ItemBio>
            </CartItem>
            <CardExit>Remove</CardExit>
          </RightWrapper>
        </CartRightWrapper>
        <CartLeftWrapper>
          <LeftContainer>
            <LeftHeading>Cart Summary</LeftHeading>
            <ItemPrice>
              <strong>Price:</strong>₹55
            </ItemPrice>
            <ShippingCharge>
              <ShippingChargeText>Shipping Charge:</ShippingChargeText>
              <ShippingPrice>Free</ShippingPrice>
            </ShippingCharge>
            <TotalPrice>
              <TotalPriceText>Total Amount:</TotalPriceText>
              <TotalPriceValue>₹55</TotalPriceValue>
            </TotalPrice>
            <CheckOut>Checkout</CheckOut>
          </LeftContainer>
        </CartLeftWrapper>
      </Container>
    </MainContainer>
  )
}

export default Cart
