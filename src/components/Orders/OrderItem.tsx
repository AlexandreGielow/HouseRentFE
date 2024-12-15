import useNewOrderForm from './useNewOrderForm'
import '../../App.css'
import { TextField, Box ,Select, FormLabel, FormGroup}  from '@mui/material'
import Button from '@mui/material/Button'
import { DataGrid,GridColDef } from '@mui/x-data-grid';
import { defaultBox } from '../../components/Utils/Styles.js';

const OrderItems = () => {
  const {products ,FetchProducts,currentProduct,handleChangeProduct,orderItems,handleChangeOrderItems} = useNewOrderForm()
  const columns: GridColDef<(typeof products)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'name', headerName: 'Product', width: 250 },
    { field: 'quantity', headerName: 'Qt', width: 50 },
    { field: 'value', headerName: 'Vl', width: 50 },
    { field: 'unitOfMesure', headerName: 'U.M.', width: 50 }]


  FetchProducts()
  return (
        <Box className="container" sx={defaultBox}> 
         <h2 className="label">Add the desired items</h2>
        <FormGroup>               
            <FormLabel sx={{color:'white'}}>Item</FormLabel>
            <Select 
                name='id'
                type='number'
                label='Type'
                value={currentProduct.id} 
                onChange={handleChangeProduct}>
                {FetchProducts()}
            </Select>
            <FormLabel sx={{color:'white'}}>Quantity</FormLabel>
            <TextField
                name='quantity'
                type='number'
                placeholder='0'
                variant='standard'
                value={currentProduct.quantity} 
                onChange={handleChangeProduct}/>                       
            </FormGroup>  
            <Button 
                        variant='contained' 
                        color='primary'                         
                        size='large' 
                        onClick={handleChangeOrderItems}>Add Item</Button>  
            <DataGrid
                rows={orderItems}
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

export default OrderItems
