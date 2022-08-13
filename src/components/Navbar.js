import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux'
import { Button } from '@mui/material'
import LoginIcon from '@mui/icons-material/LockOpen'
import ProfileIcon from '@mui/icons-material/Person'
import NewUserIcon from '@mui/icons-material/AddCircle'

function Navbar () {
  const currentName = useSelector(state => state.user.name)
  const userLogged = useSelector(state => state.user.isLogged)
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const [elements, setElements] = useState('SignUpForm')
  function addElements () {
    setElements([...elements, 'SignUpForm'])
  }
  const [elements2, setElements2] = useState('LoginForm')
  function addElements2 () {
    setElements2([...elements2, 'LoginForm'])
  }
  
  return (
    <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        House Rent
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link
                                to='/FindHome'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Find a Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/NewHomeForm'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Rent your Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/SignUpForm'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                Sign Up
                            </Link>
                        </li>
                    </ul>

                    {!userLogged && <Link to='/LoginForm'>
                        <Button 
                        variant='contained' 
                        startIcon={<LoginIcon/>}
                        color='primary' 
                        size='large' 
                        style={{fontSize: 14}}
                        onClick={addElements2}  
                        value='/LoginForm'>LOGIN</Button>
                        </Link>}
                    {!userLogged && <Link to='/SignUpForm'>
                        <Button 
                        variant='contained' 
                        color='secondary' 
                        startIcon={<NewUserIcon/>}
                        size='large' 
                        style={{fontSize: 14}}
                        onClick={addElements}  
                        value='/SignUpForm'>SIGN-UP</Button>
                        </Link>}
                    {userLogged && <Link to='/Profile'>
                        <Button 
                        variant='contained' 
                        color='primary' 
                        startIcon={<ProfileIcon/>}
                        size='large' 
                        onClick={addElements}  
                        value='/SignUpForm'>Welcome {currentName}</Button>
                        </Link>}
                </div>
            </nav>

    </>
  )
}

export default Navbar
