import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  align-items: center;
  border-bottom: 2px solid #ffb84d;
`
export const LoginContainer = styled.div``

export const Logo = styled.div`
  margin-top: 5px;
  cursor: pointer;
`

export const Category = styled.div`
  display: flex;
`
export const DogWrapper = styled.div`
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`
export const NavbarLink = styled(Link)`
  color: black;
  &:hover {
    color: black;
  }
`

export const CatWrapper = styled.div`
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`

export const UserSection = styled.div`
  display: flex;
`

export const UserLogin = styled.div`
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`
export const UserLogOut = styled.div`
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`

export const UserSignup = styled.div`
  margin-left: 5px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`
export const AddToCart = styled.div`
  cursor: pointer;
`
