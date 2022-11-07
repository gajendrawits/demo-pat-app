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
  /* flex-direction: column; */
  border: 1px solid whitesmoke;
  cursor: pointer;
`

export const CardMedia = styled.div`
  width: 50%;
  img {
    object-fit: contain;
    max-width: 100%;
    height: 150px;
  }
`
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const CardTitleName = styled.div`
  display: flex;
`
export const CardNameHeading = styled.div`
  font-size: 1.2rem;
`

export const CardTextBreed = styled.div`
  display: flex;
`

export const CardAnimal = styled.div`
  display: flex;
  text-transform: capitalize;
  font-family: sans-serif;
`
export const CardData = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin-left: 10px;
`

export const AddAnimal = styled.div`
  display: flex;
  width: 10vw;
  height: 10vh;
  background-color: whitesmoke;
  margin: auto;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    background-color: #d9d9d9;
  }
  h2 {
    padding: 25px 30px;
  }
`
