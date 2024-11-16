import React,{useState} from 'react'
import Navbar from './components/Utils/Navbar.tsx'
import './App.css'
import './components/Utils/HeroSection.js'
import Home from './pages/Stores/NewStoreForm.js'
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom'
import SignUpForm from './pages/LoginRegister/SignUpForm.js'
import FetchStores from './components/Stores/FetchStores.js'
import LoginForm from './pages/LoginRegister/LoginForm'
import NewStoreForm from './pages/Stores/NewStoreForm.js'
import NewOrderForm from './pages/Orders/NewOrderForm.js'
import NewProductForm from './pages/Products/NewProductForm.js'
import ProductsList from './pages/Products/ProductsList'
import Cards from './components/Utils/Cards.js'
import 'fontsource-roboto'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, orange } from '@mui/material/colors'
import Footer from './components/Utils/Footer.js'
import { UserContext,User } from './context/ContextProvider'

const defaultTheme = createTheme({

palette: {
 mode: 'dark',
primary: orange,
secondary: grey
}
})


function App () {
  const [user, setUser] = useState<User | null>(null);
  return (
    <>
    <Router>
    <ThemeProvider theme={defaultTheme} >
      <UserContext.Provider value={{ user, setUser }} >
      <Navbar />
      <div className="hero-container">
        {!user && <Routes>
          {/* Public Routes */ }
            <Route path='/' element={<Home storeForm={undefined}/>} />
            <Route path='/SignUpForm' element={<SignUpForm submitForm={undefined}/>} />
            <Route path='/LoginForm' element={<LoginForm loginForm={undefined}/>} />      
          </Routes>
        }
        {user && <Routes>
          {/* Protected Routes */ }
            <Route path='/NewStoreForm' element={<NewStoreForm storeForm={undefined}/>} />
            <Route path='/NewOrderForm' element={<NewOrderForm orderForm={undefined}/>} />
            <Route path='/ProductsRegister' element={<NewProductForm/>} />
            <Route path='/ProductsList' element={<ProductsList/>} />
            <Route path='/FindHome' element={<Cards/>}/>
            <Route path='./components/SignUpForm' element={<SignUpForm submitForm={undefined}/>} />
            <Route path='./components/FetchStores' element={<FetchStores filter={undefined}/>}/>       
          </Routes>
        }
        <Outlet/>
          </div>
          <Footer />
          </UserContext.Provider>
          </ThemeProvider>
        </Router>
    </>
  )
}

export default App