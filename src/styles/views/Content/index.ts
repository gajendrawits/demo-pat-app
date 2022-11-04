import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  flex-wrap: wrap;
  gap: 2vw;
`

export const Card = styled.div`
  width: 28vw;
  background-color: whitesmoke;
  box-shadow: 1px 1px 1px whitesmoke;
  display: flex;
  flex-direction: column;
  border: 1px solid whitesmoke;
  cursor: pointer;
`

export const CardMedia = styled.div`
  width: 80%;
  img {
    object-fit: contain;
    max-width: 100%;
    height: 150px;
  }
`
export const CardContent = styled.div`
  display: flex;
  justify-content: space-around;
`

export const CardTitleName = styled.div`
  font-size: 1rem;
`
export const CardTextBreed = styled.div``

export const CardAnimal = styled.div`
  text-transform: capitalize;
  font-family: sans-serif;
`
