import React from 'react'
import { FormControl, Box ,Button,TextField,FormGroup} from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import useProductsList from '../../components/Products/useProductsList'
import { defaultTopBox } from '../../components/Utils/Styles.js';


const ProductsListForm = () => {
  const {getProductList,products,handleChange, values} = useProductsList('products')

  const columns: GridColDef<(typeof products)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 80,
      editable: true,
    },
    {
      field: 'unitOfMesure',
      headerName: 'U.M.',
      type: 'number',
      width: 80,
      editable: true,
    },
    {
      field: 'value',
      headerName: 'Value',
      type: 'number',
      width: 80,
      editable: true,
    }
  ];


  return (
      <FormControl sx={{ m: 1, minWidth: 120 }}   variant='standard'>        
        <Box  sx={defaultTopBox} maxWidth='sm' >
          <h2 className="label">Products registered</h2>
          <FormGroup>
          <TextField
              name="Filter" 
              value={values.Filter} 
              onChange={handleChange}
              type='text'
              label='Filter'
              placeholder='Login'
              sx={{color:'white'}}
              variant='standard'
              color='primary'
          />
          </FormGroup>
        </Box> 
        <Box  sx={defaultTopBox} maxWidth='sm' >
            <DataGrid
              rows={products}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              checkboxSelection
              disableRowSelectionOnClick
          />
        </Box>
        <Button 
        variant='contained' 
        color='primary'                         
        size='large' 
        onClick={getProductList}>Get all products</Button>        
      </FormControl>
  )
}

export default ProductsListForm
