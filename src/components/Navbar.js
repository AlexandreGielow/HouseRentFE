import React, { useState, useEffect } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar () {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }
  useEffect(() => {
    showButton()
  }, [showButton])

  const [elements, setElements] = useState('SignUpForm')
  function addElements () {
    setElements([...elements, 'SignUpForm'])
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
                    {button && <Link to='/SignUpForm'>
                        <Button onClick={addElements} buttonStyle='btn--outline'>SIGN UP</Button>
                        </Link>}
                </div>
            </nav>
        </>
  )
}

export default Navbar
