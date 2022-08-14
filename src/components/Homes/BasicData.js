import React from 'react'
import useNewHomeForm from '../../components/Homes/useNewHomeForm'
import '../../App.css'
import Checkbox from '@mui/material/Checkbox'
import { TextField, Box ,Select, MenuItem, FormControlLabel, FormLabel, FormGroup }  from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'


const NewHomeForm = ({ homeForm }) => {
  const { handleChange, values } = useNewHomeForm(
    homeForm
  )

  return (
        <Box className="container" sx={ {background: 'black', display: 'flex', 'flex-direction': 'column', 'justify-content': 'center' ,borderRadius:3} }> 
        <FormGroup>      
            <FormLabel sx={{color:'white'}}>Type of Property</FormLabel>
            <Select 
                defaultValue={0}
                label='Type'
                value={values.Type} 
                sx={{'margin-bottom':'10px', 'margin-top':'1px'}}
                onChange={handleChange}>
                    <MenuItem value = {0}>Room in House</MenuItem>
                    <MenuItem value = {1}>House</MenuItem>
                    <MenuItem value = {2}>Apartment</MenuItem>
                    <MenuItem value = {3}>Trailer</MenuItem>
            </Select>
            <FormLabel sx={{color:'white'}}>Status</FormLabel>
            <Select 
                defaultValue={0}
                label='Status'
                value={values.Status} 
                sx={{'margin-bottom':'10px', 'margin-top':'1px'}}
                onChange={handleChange}>
                    <MenuItem value = {0}>Active</MenuItem>
                    <MenuItem value = {1}>Inactive</MenuItem>
                    <MenuItem value = {2}>Expired</MenuItem>
            </Select>
            <FormLabel sx={{color:'white'}}>Name</FormLabel>
            <TextField
                type='text'
                placeholder='Beautifull Apartment well located..'
                variant='standard'
                sx={{'margin-bottom':'10px'}}
                InputLabelProps={{
                    shrink: true,
                  }}
                value={values.Name} 
                onChange={handleChange}/>   
            <FormLabel sx={{color:'white'}}>Size (m²)</FormLabel>          
            <TextField
                type='text'
                placeholder='60'
                variant='standard'
                sx={{'margin-bottom':'10px'}}
                value={values.Size} 
                onChange={handleChange}/>
            <FormLabel sx={{color:'white'}}>Rooms</FormLabel>     
            <TextField
                type='text'
                placeholder='3'
                variant='standard'
                sx={{'margin-bottom':'10px'}}
                value={values.Rooms} 
                onChange={handleChange}/>                
            <FormControlLabel
                control={<Checkbox 
                name="Furnished" 
                value={values.Furnished} 
                variant='standard'
                sx={{'margin-bottom':'10px'}}
                onChange={handleChange}/>}
                label='Furnished'/>
            <FormLabel sx={{color:'white'}}>Accommodates</FormLabel>     
            <TextField
                type='text'
                placeholder='4'
                variant='standard'
                sx={{'margin-bottom':'10px'}}
                value={values.Accommodates} 
                onChange={handleChange}/> 
            <FormLabel sx={{color:'white'}}>Description</FormLabel>                            
            <TextField
                type='textarea'
                placeholder='Fill details that draw attention'
                variant='standard'
                multiline
                rows={2}
                sx={{'margin-bottom':'10px'}}
                value={values.Description} 
                onChange={handleChange}/> 
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Avaliable from"  
                                   
                    value={values.DateFrom}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            <Box sx={{'margin-bottom':'10px'}}></Box>
            <LocalizationProvider  dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Avaliable to"                    
                    value={values.DateTo} 
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider> 
            </FormGroup>     
        </Box>                   
  )
}

export default NewHomeForm
