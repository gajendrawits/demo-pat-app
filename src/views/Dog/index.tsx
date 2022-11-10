import Header from 'components/Header'
import React, { useState } from 'react'
import {
  Container,
  DogBioData,
  DogBreed,
  DogCard,
  DogContent,
  DogImage,
  DogName,
  DogStatus,
  SelectStatus,
} from 'styles/views/Dog'
import { dogContent } from 'constant/Dog'
import Footer from 'components/Footer'
import SelectField from 'components/FormElements/SelectField'

const Dog = () => {
  const [dogValue, setDogValue] = useState<string>('')

  const filterDogs = dogContent.filter((dog) => {
    return dog.status == dogValue
  })

  dogContent.push(...filterDogs)

  console.log(dogContent)

  return (
    <Container>
      <Header />
      <SelectStatus>
        <SelectField dogStatus={setDogValue} />
      </SelectStatus>
      <DogContent>
        {dogContent.map((dogs: any, index: number) => {
          return (
            <DogCard key={index}>
              <DogImage>
                <img src={dogs.ImageUrl} />
              </DogImage>
              <DogBioData>
                <DogName>
                  <strong>Name: </strong> {dogs.name}
                </DogName>
                <DogBreed>
                  <strong>Breed:</strong> {dogs.breed}
                </DogBreed>
                <DogStatus>
                  <strong>Status:</strong> {dogs.status}
                </DogStatus>
              </DogBioData>
            </DogCard>
          )
        })}
      </DogContent>
      <Footer />
    </Container>
  )
}

export default Dog
