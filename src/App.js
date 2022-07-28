import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUpForm from './pages/SignUpForm'
import FetchProperties from './components/FetchProperties'
import LoginForm from './pages/LoginForm'

function App () {
  return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route path='/SignUpForm' element={<SignUpForm/>} />
                    <Route path='/LoginForm' element={<LoginForm/>} />
                    <Route path='./components/SignUpForm' element={<SignUpForm/>} />
                    <Route path='./components/FetchProperties' element={<FetchProperties/>}/>
                </Routes>
            </Router>
        </>
  )
}

export default App
