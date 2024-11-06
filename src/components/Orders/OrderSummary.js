import React from 'react'
import useNewHomeForm from '../Orders/useNewOrderForm'
import '../../App.css'
import { Box ,Select, MenuItem, FormLabel, FormGroup}  from '@mui/material'
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
        <Box className="container" sx={{background: 'black', display: 'flex', minWidth: '550px', flexDirection: 'column', justifyContent: 'center' ,borderRadius:3}}> 
        <FormGroup>      
        <FormLabel sx={{color:'white'}}>Store selected to Deliver</FormLabel>
            <Select 
                defaultValue={0}
                disabled='true'
                label='Type'
                value={values.Store} 
                sx={{marginBottom:'10px', marginTop:'1px'}}
                onChange={handleChange}>
                    <MenuItem value = {0}>Bloor & Younge</MenuItem>
                    <MenuItem value = {1}>Dundas</MenuItem>
                    <MenuItem value = {2}>WaterFront</MenuItem>
            </Select>
            <FormLabel sx={{color:'white'}}>Shipping Type</FormLabel>
            <Select 
                defaultValue={0}
                label='Type'
                disabled='true'
                value={values.ShippingType} 
                sx={{marginBottom:'10px', marginTop:'1px'}}
                onChange={handleChange}>
                    <MenuItem value = {0}>Standard</MenuItem>
                    <MenuItem value = {1}>Express</MenuItem>
                    <MenuItem value = {2}>ByHand</MenuItem>
            </Select>  
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
            </FormGroup>     
        </Box>
                       
  )
}

export default NewHomeFormBasic
