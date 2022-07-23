import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
import SignUpForm from './pages/SignUpForm';


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