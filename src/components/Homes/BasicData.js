import React from 'react'
import useNewHomeForm from '../../components/Homes/useNewHomeForm'
import '../../App.css'
import './NewHomeForm.css'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { TextField, FormControl }  from '@mui/material'
import Select from '@mui/material/Select'

import MenuItem from '@mui/material/MenuItem'


const NewHomeForm = ({ homeForm }) => {
  const { handleChange, values } = useNewHomeForm(
    homeForm
  )

  return (
        <>
            <Select 
                defaultValue={0}
                label='Type'
                value={values.Type} 
                onChange={handleChange}>
                    <MenuItem value = {0}>Room in House</MenuItem>
                    <MenuItem value = {1}>House</MenuItem>
                    <MenuItem value = {2}>Apartment</MenuItem>
                    <MenuItem value = {3}>Trailer</MenuItem>
            </Select>
            <Select 
                defaultValue={0}
                label='Status'
                value={values.Status} 
                onChange={handleChange}>
                    <MenuItem value = {0}>Active</MenuItem>
                    <MenuItem value = {1}>Inactive</MenuItem>
                    <MenuItem value = {2}>Expired</MenuItem>
            </Select>
            <TextField
                type='text'
                value={values.Name} 
                onChange={handleChange}/>
            <TextField
                type='date'
                value={values.DateFrom} 
                onChange={handleChange}/>
            <TextField
                type='date'
                value={values.DateTo} 
                onChange={handleChange}/>
            <TextField
                type='text'
                value={values.Value} 
                onChange={handleChange}/>
            <TextField
                type='text'
                value={values.Size} 
                onChange={handleChange}/>
            <TextField
                type='text'
                value={values.Rooms} 
                onChange={handleChange}/>                
            <FormControlLabel
                control={<Checkbox 
                name="Furnished" 
                value={values.Furnished} 
                onChange={handleChange}/>}
                label='Furnished'/>
            <TextField
                type='text'
                value={values.Accommodates} 
                onChange={handleChange}/>            
            <TextField
                type='textarea'
                value={values.Description} 
                onChange={handleChange}/> 
        </>                   
  )
}

export default NewHomeForm
