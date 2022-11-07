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

interface AddPetProps {
  onClose: () => void
}
const AddPet = ({ onClose }: AddPetProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onSubmit', resolver: yupResolver(ValidationSchema), shouldFocusError: true })

  const { mutateAsync } = usePost()

  const formData = async (val: any) => {
    const mutation = await mutateAsync({
      url: 'https://petstore.swagger.io/v2/pet',
      payload: { name: val.name, breed: val.breed, photoUrls: [val.photoUrls] },
    })

    console.log(mutation.id)

    onClose()
  }

  const handleClicked = () => {
    onClose()
  }

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
    </>
  )
}

export default AddPet
