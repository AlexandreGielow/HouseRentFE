import React, { useState } from 'react'
import { TextField, Box, Button, Select, MenuItem, FormLabel, FormGroup }  from '@mui/material'
import {v4 as uuidv4} from 'uuid'
import AmenitiesList from './AmenitiesList'

const NewHomeFormAmenities = () => {

  const [ input,setInput] = useState({
    Id: uuidv4(),
    Name: '',
    Type:''
  })
  const onInputChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
  }
  const [amenities,setAmenities] = useState([])


  const onFormSubmit = (event) => {
    event.preventDefault()
    setAmenities([...amenities, input])
    setInput({
      Id:uuidv4(),
      Name: '',
      Type: ''
    })
  }

  return (
    <Box className="container" sx={ {background: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center' ,borderRadius:3} }>
      <FormGroup>
      <FormLabel sx={{color:'white'}}>Amenitie</FormLabel>    
      <TextField
        type='text'
        placeholder='Fridge, Oven ...'
        variant='standard'
        name='Name'
        sx={{marginBottom:'10px'}}
        value={input.Name} 
        required
        onChange={onInputChange}/>
        <FormLabel sx={{color:'white'}}>Amenitie Type</FormLabel>  
        <Select 
              defaultValue={0}
              label='Type'
              name='Type'
              value={input.Type} 
              sx={{marginBottom:'10px', marginTop:'1px'}}
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
            style={{fontSize: 14, display:'flex', alignItems: 'center', width:'30px', marginBottom:'20px'}} 
            onClick={onFormSubmit}
            >Add</Button>
          <AmenitiesList amenitiess = {amenities}></AmenitiesList>
          </FormGroup>
      </Box>
  )
}

export default NewHomeFormAmenities
