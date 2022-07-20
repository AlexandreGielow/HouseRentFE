import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import SignUpForm from './components/SignUpForm';


function App() {
    return (
        <>
            <Router>
                <Navbar />                     
                <Routes>               
                    <Route exact path='/' element={<Home/>} />                 
                    <Route path='/SignUpForm' element={<SignUpForm/>} />           
                </Routes>
            </Router>
        </>
    );
}

export default App;