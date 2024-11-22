import useNewHomeForm from './useNewStoreForm'
import { TextField, Box, FormLabel, FormGroup }  from '@mui/material'
import { defaultBox } from '../../components/Utils/Styles.js';
interface AddressForm {
    Name: string;
    PostalCode: string;
    Country: string;
    State: string;
    City: string;
    Region: string;
    Address: string;
    Number: string;
    Complement: string;
}

const NewHomeFormAddress = ({addressForm}:{addressForm: AddressForm }) => {
  const { handleChange } = useNewHomeForm(
  )

  return (
    <Box className="container" sx={ defaultBox }>
        <FormGroup>
            <FormLabel sx={{color:'white'}}>Postal Code</FormLabel>
            <TextField
                type='text'
                placeholder='36925'
                variant='standard'
                sx={{marginBottom:'10px'}}
                value={addressForm.PostalCode} 
                onChange={handleChange}/>
            <FormLabel sx={{color:'white'}}>Country</FormLabel>
            <TextField
                type='text'
                placeholder='United States'
                variant='standard'
                sx={{marginBottom:'10px'}}
                value={addressForm.Country} 
                onChange={handleChange}/>  
            <FormLabel sx={{color:'white'}}>State</FormLabel>            
            <TextField
                type='text'
                placeholder='Virginia'
                variant='standard'
                sx={{marginBottom:'10px'}}
                value={addressForm.State} 
                onChange={handleChange}/>
                <FormLabel sx={{color:'white'}}>City</FormLabel>    
            <TextField
                type='text'
                placeholder='Alexandria'
                variant='standard'
                sx={{marginBottom:'10px'}}
                value={addressForm.City} 
                onChange={handleChange}/>  
            <FormLabel sx={{color:'white'}}>Region</FormLabel>                
            <TextField
                type='text'
                placeholder='Eisenhower Valley'
                variant='standard'
                sx={{marginBottom:'10px'}}
                value={addressForm.Region} 
                onChange={handleChange}/>  
            <FormLabel sx={{color:'white'}}>Address</FormLabel> 
            <TextField
                type='text'
                placeholder='141 SW Washington Street'
                variant='standard'
                sx={{marginBottom:'10px'}}
                value={addressForm.Address} 
                onChange={handleChange}/> 
            <FormLabel sx={{color:'white'}}>Number</FormLabel> 
            <TextField
                type='text'
                placeholder='1234'
                variant='standard'
                sx={{marginBottom:'10px'}}
                value={addressForm.Number} 
                onChange={handleChange}/>  
            <FormLabel sx={{color:'white'}}>Complement</FormLabel>                                                     
            <TextField
                type='textarea'
                placeholder='Nearby Supermaket X'
                variant='standard'
                multiline
                rows={4}
                sx={{marginBottom:'10px'}}
                value={addressForm.Complement} 
                onChange={handleChange}/>   
         </FormGroup>          
    </Box>
  )
}

export default NewHomeFormAddress
