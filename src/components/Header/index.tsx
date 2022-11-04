import React, { useState } from 'react'
import { Container, Logo, UserLogin, UserSection, UserSignup } from 'styles/components/Header'
import dogLogo from 'assets/dogLogo.png'
import Login from 'components/Login'
import SignUp from 'components/SingUp'

const Header = () => {
  const [Open, setOpen] = useState(false)
  const [singInOpen, setSignInOpen] = useState(false)
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

  return (
    <>
      <Container>
        <Logo>
          <img src={dogLogo} />
        </Logo>
        <UserSection>
          <UserLogin onClick={handleLogin}>Login |</UserLogin>
          <UserSignup onClick={handleSignin}>Sign up</UserSignup>
        </UserSection>
      </Container>

      {Open && <Login isClose={handleClose} />}
      {singInOpen && <SignUp isClose={handleCloseSignUp} />}
    </>
  )
}

export default Header
