import React from 'react'
import { TextField, Box, FormLabel, FormGroup,FormControl }  from '@mui/material'
import Button from '@mui/material/Button'
import LoginIcon from '@mui/icons-material/LockOpen'
import useSubmitForm from '../../components/LoginRegister/useSubmitForm'
import { defaultBox } from '../../components/Utils/Styles.js';

const SignUpForm = () => {
  const { handleChange, handleFormSubmit,values} = useSubmitForm()
  return (
    <Box className="container" sx={ defaultBox }>
        <FormControl sx={{ m: 1, minWidth: 120, 'background-color': 'black'}} margin='normal'  variant="filled">
                <FormGroup>
                        <FormLabel sx={{color:'white'}}>Postal Code</FormLabel>
                        <TextField
                                type='text'
                                placeholder='36925'
                                variant='standard'
                                sx={{marginBottom:'10px'}}
                                value={values.Name} 
                                onChange={handleChange}/>
                        <FormLabel sx={{color:'white'}}>Postal Code</FormLabel>
                        <TextField
                                type='text'
                                placeholder='36925'
                                variant='standard'
                                sx={{marginBottom:'10px'}}
                                value={values.SureName} 
                                onChange={handleChange}/>
                        <FormLabel sx={{color:'white'}}>Postal Code</FormLabel>
                        <TextField
                                type='text'
                                placeholder='36925'
                                variant='standard'
                                sx={{marginBottom:'10px'}}
                                value={values.Email} 
                                onChange={handleChange}/>
                        <FormLabel sx={{color:'white'}}>Postal Code</FormLabel>
                        <TextField
                                type='text'
                                placeholder='36925'
                                variant='standard'
                                sx={{marginBottom:'10px'}}
                                value={values.Password} 
                                onChange={handleChange}/>
                        <FormLabel sx={{color:'white'}}>Postal Code</FormLabel>
                        <TextField
                                type='text'
                                placeholder='36925'
                                variant='standard'
                                sx={{marginBottom:'10px'}}
                                value={values.ConfirmPassword} 
                                onChange={handleChange}/>
                        <Button 
                                onClick={handleFormSubmit}
                                variant='contained' 
                                startIcon={<LoginIcon/>}
                                color='primary'                         
                                size='large'
                                value='/SubmitForm'
                        >Finish and Send</Button>
                </FormGroup>
      </FormControl>
    </Box>
  );
};

export default SignUpForm
