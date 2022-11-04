import styled from 'styled-components'

export const MainWrapper = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: white;
  opacity: 0.5;
  position: absolute;
`

export const MainContainer = styled.div`
  width: 22vw;
  border: 2px solid #ffb84d;
  position: absolute;
  top: 30%;
  left: 40%;
  height: 27vh;
  display: flex;
  flex-direction: column;
  z-index: 1;
  background-color: white;
`

export const Container = styled.div`
  width: 20vw;
  height: 25vh;
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: end;
`
export const LoginCrossIcon = styled.div`
  cursor: pointer;
`

export const LoginText = styled.div`
  font-size: 1.2rem;
  font-weight: 800;
  margin: 5px 10px;
  text-align: center;
`

export const EmailInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .email {
    text-align: center;
  }
`

export const PasswordInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .password {
    text-align: center;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
