import styled from 'styled-components'

export const Container = styled.div``

export const DogContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5vw;
  margin-top: 20px;
`
export const SelectStatus = styled.div`
  width: 20vw;
  margin: auto;
  margin-top: 20px;
`

export const DogCard = styled.div`
  display: flex;
  width: 20vw;
  height: 20vh;
  background-color: whitesmoke;
  border: 2px solid #ffb84d;
`
export const DogImage = styled.div`
  width: 10vw;
  img {
    max-width: 100%;
    object-fit: contain;
  }
`

export const DogBioData = styled.div`
  display: flex;
  flex-direction: column;
  width: 10vw;
  margin-left: 10px;
`

export const DogName = styled.div``

export const DogBreed = styled.div``

export const DogStatus = styled.div``
