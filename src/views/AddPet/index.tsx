import Button from 'components/Button'
import TextInput from 'components/FormElements/TextInput'
import React from 'react'
import ClearIcon from '@mui/icons-material/Clear'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  AnimalHeading,
  ButtonWrapper,
  ChooseFile,
  Container,
  ErrorMessage,
  IconWrapper,
  InputField,
  MainWrapper,
} from 'styles/views/AddPet'
import usePost from 'hooks/usePost'
import { ValidationSchema } from 'utils/AddpetUtils'

import AlertModal from 'components/AlertModal'

interface AddPetProps {
  isClose: () => void
}
const AddPet = ({ isClose }: AddPetProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onSubmit', resolver: yupResolver(ValidationSchema), shouldFocusError: true })

  const { mutateAsync, isSuccess } = usePost()

  const formData = async (val: any) => {
    const breed = val.breed
    await mutateAsync({
      url: '/pet',
      payload: { name: val.name, tags: [{ breed }], photoUrls: [val.photoUrls] },
    })
    isClose()
  }

  const handleClicked = () => {
    isClose()
  }

  console.log(isSuccess)

  return (
    <>
      <MainWrapper />
      <Container>
        <IconWrapper>
          <ClearIcon sx={{ fontSize: '35px', fontWeight: 900, cursor: 'pointer' }} onClick={handleClicked} />
        </IconWrapper>
        <AnimalHeading>Add Pet`s</AnimalHeading>
        <form onSubmit={handleSubmit(formData)}>
          <InputField>
            <TextInput name="name" placeholder="Enter Pet Name" type="text" control={control} className="animal" />
            <ErrorMessage> {errors?.name && errors?.name?.message}</ErrorMessage>
          </InputField>
          <InputField>
            <TextInput name="breed" placeholder="Enter Pet Breed" type="text" control={control} className="animal" />
            <ErrorMessage> {errors?.breed && errors?.breed?.message}</ErrorMessage>
          </InputField>
          <ChooseFile>
            <TextInput name="photoUrls" type="file" control={control} className="choosefiles" />
          </ChooseFile>
          <ButtonWrapper>
            <Button label="submit" type="submit" />
          </ButtonWrapper>
        </form>
      </Container>
      {isSuccess ? <AlertModal Content="Pet Add SuccessFully" isClose={handleClicked} /> : null}
    </>
  )
}

export default AddPet

//<AlertModal Content="Pet Add SuccessFully" isClose={handleClicked} />
