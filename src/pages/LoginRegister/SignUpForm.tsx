import { TextField, Box, FormLabel, FormGroup, Button }  from '@mui/material'
import useSubmitForm from '../../components/LoginRegister/useSubmitForm'
import '../../App.css'
import './SignUpForm.css'

interface AccountSubmitForm {
  Name: string;
  SureName: string;
  Email: string;
  Password: string;
  ConfirmPassword: string;
}

const SignUpForm = ({AccountForm}:{AccountForm: AccountSubmitForm }) => {
  const { handleChange, handleFormSubmit, values, errors } = useSubmitForm(
        AccountForm
  )
  return (
    <Box className="container" sx={ {background: 'black', display: 'flex',minWidth: '550px', flexDirection: 'column',justifyContent: 'center' ,borderRadius:3} }>
    <FormGroup>
        <FormLabel sx={{color:'white'}}>Postal Code</FormLabel>
        <TextField
                type='text'
                placeholder='36925'
                variant='standard'
                sx={{marginBottom:'10px'}}
                value={AccountForm.Name} 
                onChange={handleChange}/>
        <FormLabel sx={{color:'white'}}>Postal Code</FormLabel>
        <TextField
                type='text'
                placeholder='36925'
                variant='standard'
                sx={{marginBottom:'10px'}}
                value={AccountForm.SureName} 
                onChange={handleChange}/>
        <FormLabel sx={{color:'white'}}>Postal Code</FormLabel>
        <TextField
                type='text'
                placeholder='36925'
                variant='standard'
                sx={{marginBottom:'10px'}}
                value={AccountForm.Email} 
                onChange={handleChange}/>
        <FormLabel sx={{color:'white'}}>Postal Code</FormLabel>
        <TextField
                type='text'
                placeholder='36925'
                variant='standard'
                sx={{marginBottom:'10px'}}
                value={AccountForm.Password} 
                onChange={handleChange}/>
        <FormLabel sx={{color:'white'}}>Postal Code</FormLabel>
        <TextField
                type='text'
                placeholder='36925'
                variant='standard'
                sx={{marginBottom:'10px'}}
                value={AccountForm.ConfirmPassword} 
                onChange={handleChange}/>
        <Button 
                variant='contained' 
                color='primary'                         
                size='large' 
                type="submit"
               >Finish and Send</Button>
      </FormGroup>
    </Box>
  );
};

export default SignUpForm
