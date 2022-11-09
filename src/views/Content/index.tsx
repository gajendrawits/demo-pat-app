import React, { useState } from 'react'
import {
  Container,
  Card,
  CardAnimal,
  CardMedia,
  CardTextBreed,
  CardContent,
  CardTitleName,
  AddAnimal,
  CardNameHeading,
  CardData,
} from 'styles/views/Content'
import { animals } from 'constant/data'
import AddPet from 'views/AddPet'

interface animalsProps {
  name: string
  breed: string
  animal: string
  ImageUrl?: string
}

const Content = () => {
  const [addAnimal, setAddAnimal] = useState(false)
  const handleAdd = () => {
    setAddAnimal(true)
  }

  const handleClose = () => {
    setAddAnimal(false)
  }

  return (
    <>
      <Container>
        {animals?.map((animal: animalsProps, index: number) => (
          <Card key={index}>
            <CardMedia>
              <img src={animal?.ImageUrl} />
            </CardMedia>
            <CardContent>
              <CardTitleName>
                <CardNameHeading>Name: </CardNameHeading> <CardData> {animal.name}</CardData>
              </CardTitleName>
              <CardTextBreed>
                <CardNameHeading>Bredd: </CardNameHeading> <CardData> {animal.breed} </CardData>
              </CardTextBreed>
              <CardAnimal>
                <CardNameHeading> Animal: </CardNameHeading>
                <CardData> {animal.animal}</CardData>
              </CardAnimal>
            </CardContent>
          </Card>
        ))}
      </Container>
      <AddAnimal onClick={handleAdd}>
        <h2>Add Your Pet </h2>
      </AddAnimal>
      {addAnimal && <AddPet isClose={handleClose} />}
    </>
  )
}

export default Content
