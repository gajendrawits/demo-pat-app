import React from 'react'
import { Container, Logo, UserLogin, UserSection, UserSignup } from 'styles/components/Header'
import dogLogo from 'assets/dogLogo.png'
import Login from 'components/Login'

const Header = () => {
  const [Open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  return (
    <>
      <Container>
        <Logo>
          <img src={dogLogo} />
        </Logo>
        <UserSection>
          <UserLogin onClick={handleClick}>Login in |</UserLogin>
          <UserSignup>Sign up</UserSignup>
        </UserSection>
      </Container>

      {Open && <Login />}
    </>
  )
}

export default Header
