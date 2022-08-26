import React, { useState } from 'react'
import { TextField, Box, Button, FormLabel, FormGroup }  from '@mui/material'
import {v4 as uuidv4} from 'uuid'
import RulesList from './RulesList'

const NewHomeFormRules = () => {

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
  const [rules,setRules] = useState([])


  const onFormSubmit = (event) => {
    event.preventDefault()
    setRules([...rules, input])
    setInput({
      Id:uuidv4(),
      Name: '',
      Type: ''
    })
  }
  return (
    <>
      <Box className="container" sx={ {background: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center' ,borderRadius:3} }>
        <FormGroup>
          <FormLabel sx={{color:'white'}}>Rules and Accessibility</FormLabel>    
          <TextField
            type='text'
            placeholder='Pets, Smoke, Wheelchair accessibility  ...'
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
              <RulesList ruless = {rules}></RulesList>
        </FormGroup>
      </Box>
    </>
  )
}

export default NewHomeFormRules
