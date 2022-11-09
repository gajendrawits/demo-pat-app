import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: white;
  opacity: 0.5;
  position: absolute;
  top: 0px;
`

export const Container = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 40vh;
  left: 40vw;
  width: 30vw;
  height: 25vh;
  border: 2px solid #ffb84d;
  background-color: white;
  z-index: 1;
`

export const AlertContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
