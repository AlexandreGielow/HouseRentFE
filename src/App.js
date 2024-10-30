import React from 'react'
import Navbar from './components/Utils/Navbar'
import './App.css'
import './components/Utils/HeroSection'
import Home from './pages/Stores/NewStoreForm'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUpForm from './pages/LoginRegister/SignUpForm'
import FetchStores from './components/Stores/FetchStores'
import LoginForm from './pages/LoginRegister/LoginForm'
import NewStoreForm from './pages/Stores/NewStoreForm'
import NewOrderForm from './pages/Orders/NewOrderForm'
import NewProductForm from './pages/Products/NewProductForm'
import Cards from './components/Utils/Cards'
import 'fontsource-roboto'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, orange } from '@mui/material/colors'
import Footer from './components/Utils/Footer'

 const defaultTheme = createTheme({

  palette: {
    mode: 'dark',
    primary: orange,
    secondary: grey
  }
})

function App () {
  return (
    <>
    <Router>
    <ThemeProvider theme={defaultTheme} >
      <Navbar />
      <div className="hero-container">
        <Routes>
          {/* Public Routes */ }
            <Route exact path='/' element={<Home/>} />
            <Route path='/SignUpForm' element={<SignUpForm/>} />
            <Route path='/LoginForm' element={<LoginForm/>} />
            <Route path='/NewStoreForm' element={<NewStoreForm/>} />
            <Route path='/NewOrderForm' element={<NewOrderForm/>} />
            <Route path='/ProductsRegister' element={<NewProductForm/>} />
            <Route path='/FindHome' element={<Cards/>}/>
            <Route path='./components/SignUpForm' element={<SignUpForm/>} />
            <Route path='./components/FetchStores' element={<FetchStores/>}/>
          {/* Protected Routes */ }          
          </Routes>
          </div>
          <Footer />
          </ThemeProvider>
        </Router>
  
    </>
  )
}

export default App
