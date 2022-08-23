import React, { useState } from 'react'
import { TextField, Box, Button, FormLabel }  from '@mui/material'
import {v4 as uuidv4} from 'uuid'
import HighlightList from './HighlightList'

const NewHomeFormHighligths = () => {

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
  const [highlights,setHighlights] = useState([])


  const onFormSubmit = (event) => {
    event.preventDefault()
    setHighlights([...highlights, input])
    setInput({
      Id:uuidv4(),
      Name: '',
      Type: ''
    })
  }
  return (
    <>
            <Box className="container" sx={ {background: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center' ,borderRadius:3} }>
      <FormLabel sx={{color:'white'}}>Highlight</FormLabel>    
      <TextField
        type='text'
        placeholder='Balcony/patio, Great View, Low traffic ...'
        variant='standard'
        name='Name'
        sx={{marginBottom:'10px'}}
        value={input.Name} 
        required
        onChange={onInputChange}/>
        <Button 
            variant='contained' 
            color='primary'                         
            size='large' 
            type='submit'
            style={{fontSize: 14, display:'flex', alignItems: 'center', width:'30px', marginBottom:'20px'}} 
            onClick={onFormSubmit}
            >Add</Button>
          <HighlightList highlightss = {highlights}></HighlightList>
      </Box>
    </>
  )
}

export default NewHomeFormHighligths
