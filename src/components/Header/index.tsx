import React, { useState } from 'react'
import {
  AddToCart,
  CatWrapper,
  Container,
  DogWrapper,
  Logo,
  NavbarLink,
  UserLogin,
  UserLogOut,
  UserSection,
  UserSignup,
} from 'styles/components/Header'
import dogLogo from 'assets/dogLogo.png'
import Login from 'components/Login'
import SignUp from 'components/SingUp'
import useGet from 'hooks/useGet'
import { useNavigate } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const Header = () => {
  const [Open, setOpen] = useState(false)
  const [singInOpen, setSignInOpen] = useState(false)
  const [getStatus, setStatus] = useState<boolean>(false)
  const navigate = useNavigate()

  const handleLogin = () => {
    setSignInOpen(false)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSignin = () => {
    setOpen(false)
    setSignInOpen(true)
  }

  const handleCloseSignUp = () => {
    setSignInOpen(false)
  }

  const handleLogout = () => {
    logOutFun()
  }
  const { refetch: logOutFun } = useGet('logout', `user/logout`)

  const homePage = () => {
    navigate('/')
  }

  const AddCart = () => {
    navigate('/cart')
  }

  return (
    <>
      <Container>
        <Logo>
          <img src={dogLogo} onClick={homePage} />
        </Logo>
        <DogWrapper>
          <NavbarLink to={'/dog'}>Dog </NavbarLink>
        </DogWrapper>
        <CatWrapper>
          <NavbarLink to={'/cat'}>Cat </NavbarLink>
        </CatWrapper>
        <UserSection>
          {getStatus ? (
            <UserLogOut onClick={handleLogout}>Logout</UserLogOut>
          ) : (
            <UserLogin onClick={handleLogin}>LogIn</UserLogin>
          )}
          <UserSignup onClick={handleSignin}>| Sign up</UserSignup>
        </UserSection>
        <AddToCart onClick={AddCart}>
          <ShoppingCartIcon fontSize="large" />
        </AddToCart>
      </Container>

      {Open && <Login isClose={handleClose} getStatus={setStatus} />}
      {singInOpen && <SignUp isClose={handleCloseSignUp} />}
    </>
  )
}

export default Header
