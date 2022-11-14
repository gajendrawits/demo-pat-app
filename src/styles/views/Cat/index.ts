import styled from 'styled-components'

export const Container = styled.div``

export const CatContent = styled.div`
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

export const CatCard = styled.div`
  display: flex;
  width: 20vw;
  height: 24vh;
  background-color: whitesmoke;
  border: 2px solid #ffb84d;
`

export const CatImage = styled.div`
  width: 10vw;
  img {
    max-width: 100%;
    object-fit: scale-down;
    height: auto;
  }
`

export const CatBioData = styled.div`
  display: flex;
  flex-direction: column;
  width: 10vw;
  margin-left: 10px;
`

export const CatName = styled.div`
  display: flex;
  margin: 10px 0px;
`

export const CatsBio = styled.div`
  font-size: 1rem;
  margin-left: 10px;
  text-transform: capitalize;
`

export const CatBreed = styled.div`
  display: flex;
  margin: 10px 0px;
`

export const CatStatus = styled.div`
  display: flex;
`
export const ButtonWrapper = styled.div`
  margin: 10px 0px;
`
