import React from 'react'
import { TextField, Box, FormLabel, FormGroup,FormControl }  from '@mui/material'
import Button from '@mui/material/Button'
import LoginIcon from '@mui/icons-material/LockOpen'
import useSubmitForm from '../../components/LoginRegister/useSubmitForm'

const SignUpForm = () => {
  const { handleChange, handleFormSubmit,values} = useSubmitForm()
  return (
    <Box className="container" sx={ {background: 'black', display: 'flex',minWidth: '550px', flexDirection: 'column',justifyContent: 'center' ,borderRadius:3} }>
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
                                style={{fontSize: 14}}
                                value='/SubmitForm'
                        >Finish and Send</Button>
                </FormGroup>
      </FormControl>
    </Box>
  );
};

export default SignUpForm
