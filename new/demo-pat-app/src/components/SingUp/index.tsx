import Button from 'components/Button'
import TextInput from 'components/FormElements/TextInput'
import React from 'react'
import { useForm } from 'react-hook-form'
import ClearIcon from '@mui/icons-material/Clear'
import {
  ButtonWrapper,
  Container,
  EmailWrapper,
  FirstNameWrapper,
  LastNameWrapper,
  PasswordWrapper,
  PhoneWrapper,
  SignUpWrapper,
  UserNameWrapper,
  UserWrapper,
  MainContainer,
  Wrapper,
  SignUpIconWrapper,
  MainWrapper,
} from 'styles/components/SignUp'

interface signInProps {
  isClose: () => void
}

const SignUp = ({ isClose }: signInProps) => {
  const { control } = useForm()

  return (
    <>
      <MainWrapper />
      <MainContainer>
        <Container>
          <Wrapper>
            <SignUpWrapper>Sign Up</SignUpWrapper>
            <SignUpIconWrapper>
              <ClearIcon sx={{ fontSize: '38px', fontWeight: 900 }} onClick={() => isClose()} />
            </SignUpIconWrapper>
          </Wrapper>
          <form>
            <UserWrapper>
              <FirstNameWrapper>
                <TextInput
                  name="firstname"
                  placeholder="Enter your First Name"
                  type="text"
                  control={control}
                  className="firstname"
                />
              </FirstNameWrapper>
              <LastNameWrapper>
                <TextInput
                  name="lastname"
                  placeholder="Enter your Last Name"
                  type="text"
                  control={control}
                  className="lastname"
                />
              </LastNameWrapper>
            </UserWrapper>
            <UserNameWrapper>
              <TextInput
                name={'username'}
                placeholder="Enter your username"
                type="text"
                control={control}
                className="username"
              />
            </UserNameWrapper>
            <PhoneWrapper>
              <TextInput
                name={'phone'}
                placeholder="Enter your Phone Number"
                type="number"
                control={control}
                className="phonenumber"
              />
            </PhoneWrapper>
            <EmailWrapper>
              <TextInput
                name={'email'}
                placeholder="Enter your Email"
                type="text"
                control={control}
                className="email"
              />
            </EmailWrapper>
            <PasswordWrapper>
              <TextInput
                name={'password'}
                placeholder="Enter your Last Password"
                type="text"
                control={control}
                className="password"
              />
            </PasswordWrapper>
            <ButtonWrapper>
              <Button label={'SignUp'} type="submit" />
            </ButtonWrapper>
          </form>
        </Container>
      </MainContainer>
    </>
  )
}

export default SignUp
