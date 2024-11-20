import React from 'react'
import useNewOrderForm from '../Orders/useNewOrderForm'
import '../../App.css'
import { TextField, Box ,Select, MenuItem, FormLabel, FormGroup}  from '@mui/material'


const OrderFormBasic = () => {
  const { handleChangeBasic, basicData } = useNewOrderForm()

  return (
        <Box className="container" sx={{background: 'black', display: 'flex', minWidth: '550px', flexDirection: 'column', justifyContent: 'center' ,borderRadius:3}}> 
            <h2 className="label">Inform some basic data</h2>
        <FormGroup>
            <FormLabel sx={{color:'white'}}>Store to Deliver</FormLabel>
            <Select 
                defaultValue={0}
                label='Type'
                value={basicData.Store} 
                sx={{marginBottom:'10px', marginTop:'1px'}}
                onChange={handleChangeBasic}>
                    <MenuItem value = {0}>Bloor & Younge</MenuItem>
                    <MenuItem value = {1}>Dundas</MenuItem>
                    <MenuItem value = {2}>WaterFront</MenuItem>
            </Select>
            <FormLabel sx={{color:'white'}}>Status</FormLabel>
            <Select 
                defaultValue={0}
                label='Status'
                value={basicData.Status} 
                sx={{marginBottom:'10px', marginTop:'1px'}}
                onChange={handleChangeBasic}>
                    <MenuItem value = {0}>Draft</MenuItem>
                    <MenuItem value = {1}>Ready</MenuItem>
            </Select>
            <FormLabel sx={{color:'white'}}>Description</FormLabel>
            <TextField
                type='text'
                placeholder='Send as soon as possible..'
                variant='standard'
                sx={{marginBottom:'10px'}}
                value={basicData.Description} 
                onChange={handleChangeBasic}/>   
            <FormLabel sx={{color:'white'}}>Shipping Type</FormLabel>
            <Select 
                defaultValue={0}
                label='Type'
                value={basicData.ShippingType} 
                sx={{marginBottom:'10px', marginTop:'1px'}}
                onChange={handleChangeBasic}>
                    <MenuItem value = {0}>Standard</MenuItem>
                    <MenuItem value = {1}>Express</MenuItem>
                    <MenuItem value = {2}>ByHand</MenuItem>
            </Select>            
            <Box sx={{marginBottom:'10px'}}></Box>        
            </FormGroup>     
        </Box>
                       
  )
}

export default OrderFormBasic
