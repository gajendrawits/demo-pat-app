import Footer from 'components/Footer'
import SelectField from 'components/FormElements/SelectField'
import Header from 'components/Header'
import { CatData } from 'constant/Cat'
import React, { useContext, useState } from 'react'
import Button from 'components/Button'
import {
  ButtonWrapper,
  CatBioData,
  CatBreed,
  CatCard,
  CatContent,
  CatImage,
  CatName,
  CatsBio,
  CatStatus,
  Container,
  SelectStatus,
} from 'styles/views/Cat'
import { LoaderContext } from 'context/loader'

const Cat = () => {
  const [selectValue, setSelectValue] = useState<string>('')

  const Catarr = CatData.slice()

  const filterCats = Catarr.filter((cat) => {
    return cat.status == selectValue
  })

  if (filterCats.length > 0) {
    Catarr.splice(0, Catarr.length)
    Catarr.push(...filterCats)
    filterCats.splice(0, filterCats.length)
  }

  const { dispatch } = useContext(LoaderContext)

  return (
    <Container>
      <Header />
      <SelectStatus>
        <SelectField dogStatus={setSelectValue} />
      </SelectStatus>
      <CatContent>
        {Catarr.map((cats: any, index: number) => {
          return (
            <CatCard key={index}>
              <CatImage>
                <img src={cats.ImageUrl} />
              </CatImage>
              <CatBioData>
                <CatName>
                  <strong>Name: </strong> <CatsBio>{cats.name}</CatsBio>
                </CatName>
                <CatBreed>
                  <strong>Breed:</strong> <CatsBio>{cats.breed} </CatsBio>
                </CatBreed>
                <CatStatus>
                  <strong>Status:</strong> <CatsBio>{cats.status}</CatsBio>
                </CatStatus>
                <ButtonWrapper>
                  <Button label="Add to cart" onClick={() => dispatch({ type: 'ADD_ITEM', payload: cats })} />
                </ButtonWrapper>
              </CatBioData>
            </CatCard>
          )
        })}
      </CatContent>
      <Footer />
    </Container>
  )
}

export default Cat

//onClick={() => setCart(cats)}
