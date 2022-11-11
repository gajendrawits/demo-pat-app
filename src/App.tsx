import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import HomePage from 'pages/homepage'
import { LoaderProvider } from 'context/loader'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dog from 'views/Dog'
import Cat from 'views/Cat'
import Cart from 'views/Cart'
const queryClient = new QueryClient()

const App = () => (
  <LoaderProvider>
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
  </LoaderProvider>
)

export default App
