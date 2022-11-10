import React, { useState } from 'react'
import { Container, Logo, UserLogin, UserLogOut, UserSection, UserSignup } from 'styles/components/Header'
import dogLogo from 'assets/dogLogo.png'
import Login from 'components/Login'
import SignUp from 'components/SingUp'
import useGet from 'hooks/useGet'

const Header = () => {
  const [Open, setOpen] = useState(false)
  const [singInOpen, setSignInOpen] = useState(false)
  const [getStatus, setStatus] = useState<boolean>(false)
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

  return (
    <>
      <Container>
        <Logo>
          <img src={dogLogo} />
        </Logo>
        <UserSection>
          {getStatus ? (
            <UserLogOut onClick={handleLogout}>Logout</UserLogOut>
          ) : (
            <UserLogin onClick={handleLogin}>LogIn</UserLogin>
          )}
          <UserSignup onClick={handleSignin}>| Sign up</UserSignup>
        </UserSection>
      </Container>

      {Open && <Login isClose={handleClose} getStatus={setStatus} />}
      {singInOpen && <SignUp isClose={handleCloseSignUp} />}
    </>
  )
}

export default Header
