import React from 'react'
import useNewHomeForm from './useNewHomeForm'
import { TextField, Box, Button }  from '@mui/material'
const NewHomeForm = ({ homeForm }) => {
  const { handleChange, values } = useNewHomeForm(
    homeForm
  )

  return (
    <Box className="container" sx={ {background: 'black', display: 'flex', 'flex-direction': 'column', 'justify-content': 'center' ,borderRadius:3} }>
      <TextField
        type='text'
        placeholder='Ammenities'
        variant='standard'
        sx={{'margin-bottom':'10px'}}
        value={values.PostalCode} 
        onChange={handleChange}/>
        <Button 
            variant='contained' 
            color='primary'                         
            size='large' 
            style={{fontSize: 14, display:'flex', 'align-items': 'center', width:'30px'}} 
            // </Box>onClick={}
            >Add</Button>
      </Box>
  )
}

export default NewHomeForm
