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
  SignUpIconWrapper,
  MainWrapper,
} from 'styles/components/SignUp'

import { ValidationSchema } from 'utils/SignUpUtils'
import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorMessage } from 'styles/components/Login'
import usePost from 'hooks/usePost'
import AlertModal from 'components/AlertModal'

interface signInProps {
  isClose: () => void
}

const SignUp = ({ isClose }: signInProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(ValidationSchema) })

  const { mutateAsync, isSuccess } = usePost()

  const formSignUp = async (formdata: any) => {
    mutateAsync({
      url: '/user',
      payload: { formdata },
    })
  }

  const handleClose = () => {
    isClose()
  }

  console.log(isSuccess, 'success project')

  return (
    <>
      {isSuccess ? (
        <AlertModal Content="sucessfully added" isClose={handleClose} />
      ) : (
        <>
          <MainWrapper />
          <MainContainer>
            <Container>
              <SignUpIconWrapper>
                <ClearIcon sx={{ fontSize: '38px', fontWeight: 900 }} onClick={() => isClose()} />
              </SignUpIconWrapper>
              <SignUpWrapper>Sign Up</SignUpWrapper>
              <form onSubmit={handleSubmit(formSignUp)}>
                <UserWrapper>
                  <FirstNameWrapper>
                    <TextInput
                      name="firstname"
                      placeholder="Enter your First Name"
                      type="text"
                      control={control}
                      className="firstname"
                    />
                    <ErrorMessage> {errors?.firstname && errors?.firstname?.message}</ErrorMessage>
                  </FirstNameWrapper>
                  <LastNameWrapper>
                    <TextInput
                      name="lastname"
                      placeholder="Enter your Last Name"
                      type="text"
                      control={control}
                      className="lastname"
                    />
                    <ErrorMessage> {errors?.lastname && errors?.lastname?.message}</ErrorMessage>
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
                  <ErrorMessage> {errors?.username && errors?.username?.message}</ErrorMessage>
                </UserNameWrapper>
                <PhoneWrapper>
                  <TextInput
                    name={'phone'}
                    placeholder="Enter your Phone Number"
                    type="number"
                    control={control}
                    className="phonenumber"
                  />
                  <ErrorMessage> {errors?.phone && errors?.phone?.message}</ErrorMessage>
                </PhoneWrapper>
                <EmailWrapper>
                  <TextInput
                    name={'email'}
                    placeholder="Enter your Email"
                    type="text"
                    control={control}
                    className="email"
                  />
                  <ErrorMessage> {errors?.email && errors?.email?.message}</ErrorMessage>
                </EmailWrapper>
                <PasswordWrapper>
                  <TextInput
                    name={'password'}
                    placeholder="Enter your Last Password"
                    type="text"
                    control={control}
                    className="password"
                  />
                  <ErrorMessage> {errors?.password && errors?.password?.message}</ErrorMessage>
                </PasswordWrapper>
                <ButtonWrapper>
                  <Button label={'SignUp'} type="submit" />
                </ButtonWrapper>
              </form>
            </Container>
          </MainContainer>
        </>
      )}
    </>
  )
}

export default SignUp
