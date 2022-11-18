import { createContext } from 'react'

export interface ILoaderProps {
  cart: any
  setCart: (data: any) => void
}

const contextDefaultValues: ILoaderProps = {
  cart: {},
  setCart: (data: any) => data,
}

export const LoaderContext = createContext<ILoaderProps>(contextDefaultValues)
