import React from 'react'
import useNewStoreForm from './useNewStoreForm'
import '../../App.css'
import { TextField, Box ,NativeSelect, MenuItem, FormLabel, FormGroup}  from '@mui/material'
import { defaultBox } from '../../components/Utils/Styles.js';

interface StoreForm {
  Store: number;
  Status: number;
  Description: string;
  ShippingType: number;
  ExpectedDeliveryDate: Date;
}

const StoreBasicData = ({storeForm}:{storeForm: StoreForm }) => {
    const { handleChange } = useNewStoreForm(
    )

  return (
    <Box className="container" sx={defaultBox}> 
        <h2 className="label">Inform some basic data</h2>
    <FormGroup>
        <FormLabel sx={{color:'white'}}>Store to Deliver</FormLabel>
        <NativeSelect 
            defaultValue={0}
            value={storeForm.Store} 
            sx={{marginBottom:'10px', marginTop:'1px'}}
            onChange={handleChange}>
                <MenuItem value = {0}>Bloor & Younge</MenuItem>
                <MenuItem value = {1}>Dundas</MenuItem>
                <MenuItem value = {2}>WaterFront</MenuItem>
        </NativeSelect>
        <FormLabel sx={{color:'white'}}>Status</FormLabel>
        <NativeSelect 
            defaultValue={0}
            value={storeForm.Status} 
            sx={{marginBottom:'10px', marginTop:'1px'}}
            onChange={handleChange}>
                <MenuItem value = {0}>Draft</MenuItem>
                <MenuItem value = {1}>Ready</MenuItem>
        </NativeSelect>
        <FormLabel sx={{color:'white'}}>Description</FormLabel>
        <TextField
            type='text'
            placeholder='Send as soon as possible..'
            variant='standard'
            sx={{marginBottom:'10px'}}
            value={storeForm.Description} 
            onChange={handleChange}/>   
        <FormLabel sx={{color:'white'}}>Shipping Type</FormLabel>
        <NativeSelect 
            defaultValue={0}
            value={storeForm.ShippingType} 
            sx={{marginBottom:'10px', marginTop:'1px'}}
            onChange={handleChange}>
                <MenuItem value = {0}>Standard</MenuItem>
                <MenuItem value = {1}>Express</MenuItem>
                <MenuItem value = {2}>ByHand</MenuItem>
        </NativeSelect>            
        </FormGroup>     
    </Box>                       
  )
}

export default StoreBasicData
