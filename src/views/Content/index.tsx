import React from 'react'
import { Container, Card, CardAnimal, CardMedia, CardTextBreed, CardContent, CardTitleName } from 'styles/views/Content'
import { animals } from 'constant/data'

interface animalsProps {
  name: string
  breed: string
  animal: string
  ImageUrl?: string
}

const Content = () => {
  return (
    <Container>
      {animals?.map((animal: animalsProps, index: number) => (
        <Card key={index}>
          <CardMedia>
            <img src={animal?.ImageUrl} />
          </CardMedia>
          <CardContent>
            <CardTitleName>
              <strong>Name: </strong> {animal.name}
            </CardTitleName>
            <CardTextBreed>
              <strong>Bredd: </strong> {animal.breed}
            </CardTextBreed>
          </CardContent>
          <CardAnimal>
            <strong> Animal: </strong>
            {animal.animal}
          </CardAnimal>
        </Card>
      ))}
    </Container>
  )
}

export default Content
