import React from 'react'
import useNewHomeForm from './useNewHomeForm'
import { TextField, Box, FormLabel, FormGroup }  from '@mui/material'

const NewHomeForm = ({ homeForm }) => {
  const { handleChange, values } = useNewHomeForm(
    homeForm
  )

  return (
    <Box className="container" sx={ {background: 'black', display: 'flex', 'flex-direction': 'column', 'justify-content': 'center' ,borderRadius:3} }>
        <FormGroup>
            <FormLabel sx={{color:'white'}}>Postal Code</FormLabel>
            <TextField
                type='text'
                placeholder='36925'
                variant='standard'
                sx={{'margin-bottom':'10px'}}
                value={values.PostalCode} 
                onChange={handleChange}/>
            <FormLabel sx={{color:'white'}}>Country</FormLabel>
            <TextField
                type='text'
                placeholder='United States'
                variant='standard'
                sx={{'margin-bottom':'10px'}}
                value={values.Country} 
                onChange={handleChange}/>  
            <FormLabel sx={{color:'white'}}>State</FormLabel>            
            <TextField
                type='text'
                placeholder='Virginia'
                variant='standard'
                sx={{'margin-bottom':'10px'}}
                value={values.State} 
                onChange={handleChange}/>
                <FormLabel sx={{color:'white'}}>City</FormLabel>    
            <TextField
                type='text'
                placeholder='Alexandria'
                variant='standard'
                sx={{'margin-bottom':'10px'}}
                value={values.City} 
                onChange={handleChange}/>  
            <FormLabel sx={{color:'white'}}>Region</FormLabel>                
            <TextField
                type='text'
                placeholder='Eisenhower Valley'
                variant='standard'
                sx={{'margin-bottom':'10px'}}
                value={values.Region} 
                onChange={handleChange}/>  
            <FormLabel sx={{color:'white'}}>Address</FormLabel> 
            <TextField
                type='text'
                placeholder='141 SW Washington Street'
                variant='standard'
                sx={{'margin-bottom':'10px'}}
                value={values.Address} 
                onChange={handleChange}/> 
            <FormLabel sx={{color:'white'}}>Number</FormLabel> 
            <TextField
                type='text'
                placeholder='1234'
                variant='standard'
                sx={{'margin-bottom':'10px'}}
                value={values.Number} 
                onChange={handleChange}/>  
            <FormLabel sx={{color:'white'}}>Complement</FormLabel>                                                     
            <TextField
                type='textarea'
                placeholder='Nearby Supermaket X'
                variant='standard'
                multiline
                rows={4}
                sx={{'margin-bottom':'10px'}}
                value={values.Complement} 
                onChange={handleChange}/>   
         </FormGroup>          
    </Box>
  )
}

export default NewHomeForm
