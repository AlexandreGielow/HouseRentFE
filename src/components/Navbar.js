import React, { useState, useEffect } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar () {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const [userLogged, setUserLogged] = useState(false)
  const userName = useState()

  const getUserName = () => {
    localStorage.getItem('userName')
  }

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }
  useEffect(() => {
    showButton()
    setUserLogged()
    getUserName()
  }, [showButton, setUserLogged, getUserName])

  const [elements, setElements] = useState('SignUpForm')
  function addElements () {
    setElements([...elements, 'SignUpForm'])
  }
  const [elements2, setElements2] = useState('LoginForm')
  function addElements2 () {
    setElements2([...elements2, 'LoginForm'])
  }

  window.addEventListener('resize', showButton)
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
                                to='/RentHome'
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
                    {!userLogged && button && <Link to='/LoginForm'>
                        <Button onClick={addElements2} buttonStyle='btn--outline' value='/LoginForm'>LOGIN</Button>
                        </Link>}
                    {!userLogged && button && <Link to='/SignUpForm'>
                        <Button onClick={addElements} buttonStyle='btn--outline' value='/SignUpForm'>SIGN UP</Button>
                        </Link>}
                    {userLogged >
                            <div>Bem vindo {userName}!</div>
                        }
                </div>
            </nav>
        </>
  )
}

export default Navbar
