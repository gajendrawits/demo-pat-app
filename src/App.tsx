import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import HomePage from 'pages/homepage'
import { LoaderContext } from 'context/loader'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dog from 'views/Dog'
import Cat from 'views/Cat'
import Cart from 'views/Cart'
import { useState } from 'react'
const queryClient = new QueryClient()

const App = () => {
  const [cart, setCart] = useState()

  return (
    <LoaderContext.Provider
      value={{
        cart,
        setCart,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dog" element={<Dog />} />
            <Route path="/cat" element={<Cat />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </LoaderContext.Provider>
  )
}

export default App
