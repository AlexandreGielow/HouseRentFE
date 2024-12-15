
import useNewOrderForm  from '../Orders/useNewOrderForm'
import '../../App.css'
import { Box ,Select, MenuItem, FormLabel, FormGroup}  from '@mui/material'
import { DataGrid ,GridColDef} from '@mui/x-data-grid';
import { defaultBox } from '../../components/Utils/Styles.js';


const NewHomeFormBasic = () => {
  const {basicData,products,orderItems} = useNewOrderForm()

  const columns: GridColDef<(typeof products)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'name', headerName: 'Product', width: 250 },
    { field: 'quantity', headerName: 'Qt', width: 50 },
    { field: 'value', headerName: 'Vl', width: 50 },
    { field: 'unitOfMesure', headerName: 'U.M.', width: 50 }]
  
  return (
        <Box className="container" sx={defaultBox}> 
        <FormGroup>      
        <FormLabel sx={{color:'white'}}>Store selected to Deliver</FormLabel>
            <Select 
                defaultValue={0}
                disabled={true}
                label='Type'
                value={basicData.Store} 
                sx={{marginBottom:'10px', marginTop:'1px'}}>
                    <MenuItem value = {0}>Bloor & Younge</MenuItem>
                    <MenuItem value = {1}>Dundas</MenuItem>
                    <MenuItem value = {2}>WaterFront</MenuItem>
            </Select>
            <FormLabel sx={{color:'white'}}>Shipping Type</FormLabel>
            <Select 
                defaultValue={0}
                label='Type'
                disabled={true}
                value={basicData.ShippingType} 
                sx={{marginBottom:'10px', marginTop:'1px'}}>
                    <MenuItem value = {0}>Standard</MenuItem>
                    <MenuItem value = {1}>Express</MenuItem>
                    <MenuItem value = {2}>ByHand</MenuItem>
            </Select>  
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
            </FormGroup>     
        </Box>
                       
  )
}

export default NewHomeFormBasic
