import React from 'react'
import ProductBasicData from '../../components/Products/ProductBasicData'
import { FormControl, Box } from '@mui/material'

const NewProductForm = () => {



  return (
      <FormControl sx={{ m: 1, minWidth: 120 }}   variant='standard'>
        <Box  sx={{borderRadius:3 , backgroundColor: 'black', color: 'white', width: '450px', margin: 'auto', marginTop: '10px', padding: '30px'}} maxWidth='sm' >
          <h2 className="label">Fill the fields to create a new Product </h2>
        </Box>
          <ProductBasicData/>        
      </FormControl>
  )
}

export default NewProductForm
