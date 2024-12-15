import useNewProductForm from './useNewProductForm'
import '../../App.css'
import { TextField, Box, RadioGroup, FormLabel, FormGroup, FormControlLabel, Radio } from '@mui/material'
import { defaultBox } from '../../components/Utils/Styles.js';
const NewProductFormBasic = ({ productForm }) => {
    const { handleChange, values } = useNewProductForm(
        productForm
    )
    return (
        <Box className="container" sx={defaultBox}>
            <FormGroup>
                <FormLabel sx={{ color: 'white' }}>Product Name</FormLabel>
                <TextField
                    name="Name" 
                    type='text'
                    placeholder='Melita decaffeinated 1kg..'
                    variant='standard'
                    sx={{ marginBottom: '10px' }}
                    value={values.Name}
                    onChange={handleChange} />
                <FormLabel sx={{ color: 'white' }}>Product Description</FormLabel>
                <TextField
                    name="Description"
                    type='text'
                    placeholder='Decaffeinated coffee Powder 1kg'
                    variant='standard'
                    sx={{ marginBottom: '10px'}}
                    value={values.Description}
                    onChange={handleChange} />
                <FormLabel sx={{ color: 'white' }}>Quantity</FormLabel>
                <TextField
                    name="Quantity"
                    type='float'
                    placeholder='0'
                    variant='standard'
                    sx={{ marginBottom: '10px'}}
                    value={values.Quantity}
                    onChange={handleChange} />
                <FormLabel id="demo-radio-buttons-group-label">Unit of Measure</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    onChange={handleChange}
                    name="UnitOfMeasure">
                    <FormControlLabel value={0} control={<Radio />} label="kg" />
                    <FormControlLabel value={1} control={<Radio />} label="g" />
                    <FormControlLabel value={2} control={<Radio />} label="lb" />
                    <FormControlLabel value={3} control={<Radio />} label="l" />
                    <FormControlLabel value={4} control={<Radio />} label="ml" />
                </RadioGroup>
                <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    onChange={handleChange}
                    name="Status"
                    value={parseInt(values.Status)}>
                    <FormControlLabel value={0} type='int' control={<Radio />} label="Inactive" />
                    <FormControlLabel value={1} type='int' control={<Radio />} label="Active" />
                    <FormControlLabel value={2} type='int' control={<Radio />} label="Out Of Stock" />
                </RadioGroup>
            </FormGroup>
        </Box>
    )
}

export default NewProductFormBasic
