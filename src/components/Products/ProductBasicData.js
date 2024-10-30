import React from 'react'
import useNewProductForm from './useNewProductForm'
import '../../App.css'
import { TextField, Box, RadioGroup, FormLabel, FormGroup, FormControlLabel, Radio, Button } from '@mui/material'

const NewProductFormBasic = ({ productForm }) => {
    const { handleChange, values } = useNewProductForm(
        productForm
    )

    return (
        <Box className="container" sx={{ background: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: 3 }}>
            <FormGroup>
                <FormLabel sx={{ color: 'white' }}>Product Name</FormLabel>
                <TextField
                    type='text'
                    placeholder='Melita decaffeinated 1kg..'
                    variant='standard'
                    sx={{ marginBottom: '10px' }}
                    value={values.Name}
                    onChange={handleChange} />
                <FormLabel sx={{ color: 'white' }}>Product Description</FormLabel>
                <TextField
                    type='text'
                    placeholder='Decaffeinated coffee Powder 1kg'
                    variant='standard'
                    sx={{ marginBottom: '10px' }}
                    value={values.Description}
                    onChange={handleChange} />
                <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="1"
                    name="radio-buttons-group">
                    <FormControlLabel value="0" control={<Radio />} label="Inactive" />
                    <FormControlLabel value="1" control={<Radio />} label="Active" />
                    <FormControlLabel value="2" control={<Radio />} label="Out Of Stock" />
                </RadioGroup>
                <FormLabel id="demo-radio-buttons-group-label">Unit of Mesure</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="0"
                    name="radio-buttons-group">
                    <FormControlLabel value="0" control={<Radio />} label="kg" />
                    <FormControlLabel value="1" control={<Radio />} label="g" />
                    <FormControlLabel value="2" control={<Radio />} label="lb" />
                    <FormControlLabel value="3" control={<Radio />} label="l" />
                    <FormControlLabel value="4" control={<Radio />} label="ml" />
                </RadioGroup>
            </FormGroup>
            <Button 
                variant='contained' 
                color='primary'                         
                size='large' 
                style={{fontSize: 14}}  
                onClick={null}>Create Product</Button>
        </Box>

    )
}

export default NewProductFormBasic
