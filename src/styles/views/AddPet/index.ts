import styled from 'styled-components'

export const MainWrapper = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: white;
  opacity: 0.5;
  position: absolute;
  top: 0px;
`

export const Container = styled.div`
  width: 30vw;
  border: 2px solid #ffb84d;
  position: absolute;
  top: 30%;
  left: 40%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  z-index: 1;
  background-color: white;
`
export const IconWrapper = styled.div`
  display: flex;
  justify-content: end;
`

export const ErrorMessage = styled.div`
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const AnimalHeading = styled.h2`
  margin: auto;
  margin-bottom: 10px;
`
export const InputField = styled.div`
  width: 20vw;
  margin: auto;
  .animal {
    text-align: center;
  }
`
export const ChooseFile = styled.div`
  width: 15vw;
  margin: auto;
  .choosefiles {
    border: none;
  }
`
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`
