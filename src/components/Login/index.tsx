import Button from 'components/Button'
import TextInput from 'components/FormElements/TextInput'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import ClearIcon from '@mui/icons-material/Clear'
import { ValidationSchema } from 'utils/Login'
import {
  ButtonWrapper,
  Container,
  EmailInput,
  LoginCrossIcon,
  LoginText,
  MainContainer,
  MainWrapper,
  PasswordInput,
  Wrapper,
  ErrorMessage,
} from 'styles/components/Login'
import { yupResolver } from '@hookform/resolvers/yup'
import useGet from 'hooks/useGet'
import AlertModal from 'components/AlertModal'

interface LoginProps {
  isClose: () => void
  getStatus: (active: boolean) => void
}

const Login = ({ isClose, getStatus }: LoginProps) => {
  const [userName, setUserName] = useState()
  const [password, setPassword] = useState()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onSubmit', resolver: yupResolver(ValidationSchema), shouldFocusError: true })

  const userLogin = (value: any) => {
    setPassword(value.password)
    setUserName(value.username)
    userLoginFun()
  }

  const { refetch: userLoginFun, isSuccess } = useGet('login', `/user/login?username=${userName}&password=${password}`)

  const handleClicked = () => {
    isClose()
  }

  useEffect(() => {
    getStatus(isSuccess)
  })

  return (
    <>
      {isSuccess ? (
        <AlertModal Content={'Login Successfully'} isClose={handleClicked} />
      ) : (
        <>
          <MainWrapper />
          <MainContainer>
            <Container>
              <Wrapper>
                <LoginCrossIcon>
                  <ClearIcon sx={{ fontSize: '35px', fontWeight: 900 }} onClick={handleClicked} />
                </LoginCrossIcon>
              </Wrapper>
              <LoginText>Login</LoginText>
              <form onSubmit={handleSubmit(userLogin)}>
                <EmailInput>
                  <TextInput
                    name="username"
                    placeholder="Enter your Email"
                    type="text"
                    value={userName}
                    control={control}
                    className="email"
                  />
                  <ErrorMessage> {errors?.username && errors?.username?.message}</ErrorMessage>
                </EmailInput>
                <PasswordInput>
                  <TextInput
                    name="password"
                    placeholder="Enter your Password"
                    type="text"
                    value={password}
                    control={control}
                    className="password"
                  />
                  <ErrorMessage> {errors?.password && errors?.password?.message}</ErrorMessage>
                </PasswordInput>

                <ButtonWrapper>
                  <Button type="submit" label="Submit" variant="contained" />
                </ButtonWrapper>
              </form>
            </Container>
          </MainContainer>
        </>
      )}
    </>
  )
}

export default Login
