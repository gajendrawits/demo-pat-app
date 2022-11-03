import Button from 'components/Button'
import TextInput from 'components/FormElements/TextInput'
import React from 'react'
import { useForm } from 'react-hook-form'
import ClearIcon from '@mui/icons-material/Clear'
import {
  ButtonWrapper,
  Container,
  EmailInput,
  LoginCrossIcon,
  LoginText,
  MainContainer,
  PasswordInput,
  Wrapper,
} from 'styles/components/Login'

const Login = () => {
  const { control } = useForm()

  const handleClicked = () => {
    console.log('click')
  }

  return (
    <MainContainer>
      <Container>
        <Wrapper>
          <LoginCrossIcon>
            <ClearIcon sx={{ fontSize: '35px', fontWeight: 900 }} onClick={handleClicked} />
          </LoginCrossIcon>
        </Wrapper>
        <LoginText>Login</LoginText>
        <form>
          <EmailInput>
            <TextInput name="email" placeholder="Enter your Email" type="text" control={control} className="email" />
          </EmailInput>
          <PasswordInput>
            <TextInput
              name="password"
              placeholder="Enter your Password"
              type="text"
              control={control}
              className="password"
            />
          </PasswordInput>
          <ButtonWrapper>
            <Button type="submit" label="Submit" variant="contained" />
          </ButtonWrapper>
        </form>
      </Container>
    </MainContainer>
  )
}

export default Login
