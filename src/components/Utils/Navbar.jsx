import React, { useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Button } from '@mui/material'
import LoginIcon from '@mui/icons-material/LockOpen'
import NewUserIcon from '@mui/icons-material/AddCircle'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import {UserContext } from '../../context/ContextProvider'

function Navbar() {
    const user = useContext(UserContext)
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)


    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            if (anchorRef.current) {
                anchorRef.current.focus();
            }
        }
        prevOpen.current = open;
    }, [open]);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        The Coffee Backoffice
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    {!user && <Link to='/LoginForm'>
                        <Button
                            variant='contained'
                            startIcon={<LoginIcon />}
                            color='primary'
                            size='large'
                            style={{ fontSize: 14 }}
                            //onClick={addElements2}
                            value='/LoginForm'>Login</Button>
                    </Link>}
                        {user?.isLogged && <li className='nav-item'>
                            <Link
                                to='/NewOrderForm'
                                className='nav-links'
                                onClick={closeMobileMenu}>
                                New Order
                            </Link>
                        </li>}
                        {user?.isLogged && <li className='nav-item'>
                            <Link
                                to='/NewOrderForm'
                                className='nav-links'
                                onClick={closeMobileMenu}>
                                All Orders
                            </Link>
                        </li>}
                        <li>
                            <Link
                                to='/SignUpForm'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                   
                    {user?.isLogged && <Stack direction="row" spacing={2}>
                        <div>
                            <Button
                                ref={anchorRef}
                                id="composition-button"
                                aria-controls={open ? 'composition-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                                onClick={handleToggle}>
                                Records
                            </Button>
                            <Popper
                                open={open}
                                anchorEl={anchorRef.current}
                                role={undefined}
                                placement="bottom-start"
                                transition
                                disablePortal>
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{
                                            transformOrigin:
                                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                                        }}>
                                        <Paper>
                                            <ClickAwayListener onClickAway={handleClose}>
                                                <MenuList
                                                    autoFocusItem={open}
                                                    id="composition-menu"
                                                    aria-labelledby="composition-button">
                                                    <Link to='/ProductsRegister'>
                                                        <Button
                                                            variant='contained'
                                                            color='secondary'
                                                            startIcon={<NewUserIcon />}
                                                            size='small'
                                                            style={{ fontSize: 12 }}
                                                            onClick={handleClose}
                                                            value='/ProductsRegister'>New Product</Button>
                                                    </Link>
                                                    <Link to='/ProductsList'>
                                                        <Button
                                                            variant='contained'
                                                            color='secondary'
                                                            startIcon={<FormatListBulletedIcon />}
                                                            size='small'
                                                            style={{ fontSize: 12 }}
                                                            onClick={handleClose}
                                                            value='/ProductsRegister'>Products List</Button>
                                                    </Link>
                                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                        </div>
                    </Stack>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
