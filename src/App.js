import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import './components/HeroSection'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUpForm from './pages/LoginRegister/SignUpForm'
import FetchProperties from './components/properties/FetchProperties'
import LoginForm from './pages/LoginRegister/LoginForm'
import NewHomeForm from './pages/Homes/NewHomeForm'
import Cards from './components/Cards'
import 'fontsource-roboto'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, orange } from '@mui/material/colors'
import Footer from './components/Footer'

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
            <Route path='/NewHomeForm' element={<NewHomeForm/>} />
            <Route path='/FindHome' element={<Cards/>}/>
            <Route path='./components/SignUpForm' element={<SignUpForm/>} />
            <Route path='./components/FetchProperties' element={<FetchProperties/>}/>
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
