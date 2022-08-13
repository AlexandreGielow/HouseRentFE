import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUpForm from './pages/LoginRegister/SignUpForm'
import FetchProperties from './components/properties/FetchProperties'
import PersisLogin from './components/LoginRegister/PersistLogin'
import LoginForm from './pages/LoginRegister/LoginForm'
import NewHomeForm from './pages/Homes/NewHomeForm'
import 'fontsource-roboto'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, orange } from '@mui/material/colors'

 const temacagada = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: orange[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: grey[500],
    },
  },
  select: {
    '&:before': {
        borderColor: 'white',
    },
    '&:after': {
        borderColor: 'white',
    },
    '&:not(.Mui-disabled):hover::before': {
        borderColor: 'white',
    },
},
icon: {
    fill: 'white',
},
root: {
    color: 'white',
},

})

function App () {
  return (
    <>
    <Router>
    <ThemeProvider theme={temacagada} >
      <Navbar />
        <Routes>
          {/* Public Routes */ }
            <Route exact path='/' element={<Home/>} />
            <Route path='/SignUpForm' element={<SignUpForm/>} />
            <Route path='/LoginForm' element={<LoginForm/>} />
            <Route path='/NewHomeForm' element={<NewHomeForm/>} />
            <Route path='./components/SignUpForm' element={<SignUpForm/>} />
            <Route path='./components/FetchProperties' element={<FetchProperties/>}/>
          {/* Protected Routes */ }
            <Route element={<PersisLogin/>}/>
          </Routes>
          </ThemeProvider>
        </Router>
    </>
  )
}

export default App
