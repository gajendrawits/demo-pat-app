import { createContext, Dispatch } from 'react'

export interface ILoaderProps {
  state: any
  dispatch: Dispatch<any>
}

const contextDefaultValues: ILoaderProps = {
  state: {},
  dispatch: () => null,
}

export const LoaderContext = createContext<ILoaderProps>(contextDefaultValues)
