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
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core'
import { grey, orange } from '@material-ui/core/colors'
import 'fontsource-roboto'

const theme = createTheme({
  pallete: {
    main: grey[500]
  },
  secondary: {
    main: orange[500]
  }
})

function App () {
  return (
    <>
    <ThemeProvider theme={theme} >
        <Router>
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
            </Router>
      </ThemeProvider>
    </>
  )
}

export default App
