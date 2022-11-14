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

  const dogarr = dogContent.slice()

  const filterDogs = dogarr.filter((dog) => {
    return dog.status == dogValue
  })

  if (filterDogs.length > 0) {
    dogarr.splice(0, dogarr.length)
    dogarr.push(...filterDogs)
    filterDogs.splice(0, filterDogs.length)
  }

  return (
    <Container>
      <Header />
      <SelectStatus>
        <SelectField dogStatus={setDogValue} />
      </SelectStatus>
      <DogContent>
        {dogarr.map((dogs: any, index: number) => {
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
