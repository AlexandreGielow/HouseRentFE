import React from 'react'
import useLoginForm from '../../components/LoginRegister/useLoginForm'
import '../../App.css'
import './SignUpForm.css'
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import LoginIcon from '@mui/icons-material/LockOpen'
import { Box, FormControl } from '@mui/material'

const LoginForm = ({ loginForm }) => {
  const { handleChange, handleFormSubmit, values } = useLoginForm(
    loginForm
  )

  return (
        <Box className="container" sx={ {background: 'black', display: 'flex', 'flex-direction': 'column', 'justify-content': 'center', borderRadius:3} }>
        <div className="app-wrapper">
          <h2 className="lable">Fill your credentials</h2>
        </div>
        <FormControl sx={{ m: 1, minWidth: 120, 'background-color': 'black'}} margin='normal'  variant="filled">
                    <TextField
                        name="Email" 
                        value={values.Email} 
                        onChange={handleChange}
                        type='email'
                        label='Login'
                        placeholder='Login'
                        sx={{color:'white'}}
                        variant='standard'
                        color='primary'
                    />
                    <TextField
                        type="password" 
                        name="Password"
                        value={values.Password} 
                        onChange={handleChange}
                        placeholder='Password'
                        sx={{color:'white'}}
                        variant='standard'
                        label='Password'
                    />
                    <div>
                    <Link to='/'>
                        <Button 
                        onClick={handleFormSubmit}
                        variant='contained' 
                        startIcon={<LoginIcon/>}
                        color='primary' 
                        size='large' 
                        style={{fontSize: 14}}
                        value='/LoginForm'
                        >Login</Button>
                        </Link>
                    </div>
              </FormControl>
        </Box>
  )
}

export default LoginForm
