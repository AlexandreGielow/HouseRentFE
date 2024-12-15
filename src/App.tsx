import React,{useState} from 'react'
import Navbar from './components/Utils/Navbar'
import './App.css'
import './components/Utils/HeroSection.js'
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom'
import SignUpForm from './pages/LoginRegister/SignUpForm'
import LoginForm from './pages/LoginRegister/LoginForm'
import NewStoreForm from './pages/Stores/NewStoreForm'
import NewOrderForm from './pages/Orders/NewOrderForm'
import NewProductForm from './pages/Products/NewProductForm'
import ProductsList from './pages/Products/ProductsList'
import 'fontsource-roboto'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, orange } from '@mui/material/colors'
import Footer from './components/Utils/Footer'
import { UserContext,User } from './context/ContextProvider'
import Home from './pages/Home'

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
            <Route path='/' element={<Home/>} />
            <Route path='/SignUpForm' element={<SignUpForm />} />
            <Route path='/LoginForm' element={<LoginForm />} />      
          </Routes>
        }
        {user && <Routes>
          {/* Protected Routes */ }
            <Route path='/NewStoreForm' element={<NewStoreForm />} />
            <Route path='/NewOrderForm' element={<NewOrderForm />} />
            <Route path='/ProductsRegister' element={<NewProductForm/>} />
            <Route path='/ProductsList' element={<ProductsList/>} />
            <Route path='./components/SignUpForm' element={<SignUpForm />} /> 
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