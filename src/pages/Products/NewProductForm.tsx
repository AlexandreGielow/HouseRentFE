import React from 'react'
import ProductBasicData from '../../components/Products/ProductBasicData'
import { FormControl, Box, Button } from '@mui/material'
import useNewProductForm from '../../components/Products/useNewProductForm'
import { defaultTopBox } from '../../components/Utils/Styles.js';
const NewProductForm = () => {
  const {handleFormSubmit, values } = useNewProductForm()
  return (
      <FormControl sx={{ m: 1, minWidth: 120 }}   variant='standard'>
        <Box  sx={defaultTopBox} maxWidth='sm' >
          <h2 className="label">Fill the fields to create a new Product </h2>
        </Box>
          <ProductBasicData productForm={values}/>
          <Button 
                variant='contained' 
                color='primary'                         
                size='large' 
                onClick={handleFormSubmit}>Create Product</Button>        
      </FormControl>
  )
}

export default NewProductForm
