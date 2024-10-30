import React from 'react'
import useNewHomeForm from '../Stores/useNewStoreForm'
import '../../App.css'
import { TextField, Box ,Select, MenuItem, FormLabel, FormGroup}  from '@mui/material'
import Button from '@mui/material/Button'
import { DataGrid } from '@mui/x-data-grid';

const NewHomeFormBasic = ({ homeForm }) => {
  const { handleChange,  values } = useNewHomeForm(
    homeForm
  )
  const columns = [
    {
      field: 'item',
      headerName: 'Item',
      width: 200,
      editable: true,
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      type: 'number',
      width: 110,
      editable: true,
    }
  ];
  
  const rows = [
    { id: 1, item: 'Coffee Beans 1Kg Medium Roast', quantity: 1 },
    { id: 2, item: 'Cookie', quantity: 2},
  ];

  return (
        <Box className="container" sx={{background: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center' ,borderRadius:3}}> 
         <h2 className="label">Add the desired items</h2>
        <FormGroup>               
            <FormLabel sx={{color:'white'}}>Item</FormLabel>
            <Select 
                defaultValue={0}
                label='Type'
                value={values.Product} 
                sx={{marginBottom:'10px', marginTop:'1px'}}
                onChange={handleChange}>
                    <MenuItem value = {0}>Coffee Beans 1Kg Medium Roast</MenuItem>
                    <MenuItem value = {1}>Coffee Powder 1kg Dark Roast</MenuItem>
                    <MenuItem value = {2}>Cookie</MenuItem>
            </Select>
            <FormLabel sx={{color:'white'}}>Quantity</FormLabel>
            <TextField
                type='number'
                placeholder='0'
                variant='standard'
                sx={{marginBottom:'10px'}}
                value={values.Quantity} 
                onChange={handleChange}/>               
            <FormLabel sx={{color:'white'}}>Description</FormLabel>
            <TextField
                type='text'
                placeholder='Any desired observation'
                variant='standard'
                sx={{marginBottom:'10px'}}
                value={values.Description} 
                onChange={handleChange}/>               
            </FormGroup>  
            <Button 
                        variant='contained' 
                        color='primary'                         
                        size='large' 
                        style={{fontSize: 14}}  
                        onClick={null}>Add Item</Button>  
            <DataGrid
                rows={rows}
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
         
  )
}

export default NewHomeFormBasic
