import React, { useState } from 'react'
import { TextField, Box, Button, Select, MenuItem, FormLabel }  from '@mui/material'
import {v4 as uuidv4} from 'uuid'
import AmenitiesList from './AmenitiesList'

const NewHomeForm = () => {

  const [ input,setInput] = useState({
    Name: '',
    Type:''
  })
  const onInputChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
  }
  const [amenities,setAmenities] = useState([input])


  const onFormSubmit = (event) => {
    event.preventDefault()
    setAmenities([...amenities, {id: uuidv4(), Name: input, Type: input }])
    console.log(amenities)
  }

  return (
    <Box className="container" sx={ {background: 'black', display: 'flex', 'flex-direction': 'column', 'justify-content': 'center' ,borderRadius:3} }>
      <FormLabel sx={{color:'white'}}>Amenitie</FormLabel>    
      <TextField
        type='text'
        placeholder='Fridge, Oven ...'
        variant='standard'
        name='Name'
        sx={{'margin-bottom':'10px'}}
        value={input.Name} 
        required
        onChange={onInputChange}/>
        <FormLabel sx={{color:'white'}}>Amenitie Type</FormLabel>  
        <Select 
              defaultValue={0}
              label='Type'
              name='Type'
              value={input.Type} 
              sx={{'margin-bottom':'10px', 'margin-top':'1px'}}
              onChange={onInputChange}>
                  <MenuItem value = {0}>Kitchen</MenuItem>
                  <MenuItem value = {1}>Washing</MenuItem>
                  <MenuItem value = {2}>Bathing</MenuItem>
                  <MenuItem value = {3}>Technology</MenuItem>
                  <MenuItem value = {4}>Parking and Facilities</MenuItem>
        </Select>
        <Button 
            variant='contained' 
            color='primary'                         
            size='large' 
            type='submit'
            style={{fontSize: 14, display:'flex', 'align-items': 'center', width:'30px', 'margin-bottom':'20px'}} 
            onClick={onFormSubmit}
            >Add</Button>

      </Box>
  )
}

export default NewHomeForm
