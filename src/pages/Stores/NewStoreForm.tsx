import  { useState } from 'react'
import AddressData from '../../components/Stores/AddressData'
import StoreBasicData from '../../components/Stores/StoreBasicData'
import useNewStoreForm from '../../components/Stores/useNewStoreForm'
import Button from '@mui/material/Button'
import { FormControl, Box } from '@mui/material'
import { defaultTopBox } from '../../components/Utils/Styles.js';
interface StoreForm {
  Store: number;
  Status: number;
  Description: string;
  ShippingType: number;
  ExpectedDeliveryDate: Date;
}
interface AddressForm {
  Name: string;
  PostalCode: string;
  Country: string;
  State: string;
  City: string;
  Region: string;
  Address: string;
  Number: string;
  Complement: string;
}


const NewStoreForm = () => {
  const { handleFormSubmit } = useNewStoreForm()

  const [stage, setStage] = useState(0)
  const [storeValues, setStoreValues] = useState<StoreForm>({
    Store: 0,
    Status: 0,
    Description: '',
    ShippingType: 0,
    ExpectedDeliveryDate: new Date()  
  })
  const [adressValues, setAdressValues] = useState<AddressForm>({
    Name: '',
    PostalCode: '',
    Country: '',
    State: '',
    City: '',
    Region: '',
    Address: '',
    Number: '',
    Complement: ''
  })

  return (
      <FormControl sx={{ m: 1, minWidth: 120 }}   variant='standard'>
        <Box  sx={defaultTopBox} maxWidth='sm' >
          <h2 className="label">Fill the fields to create a new Home Step {stage+1} of 6</h2>
        </Box>
        {stage === 0 && <StoreBasicData storeForm={storeValues}/>}
        {stage === 1 && <AddressData addressForm={adressValues}/>}
             {stage > 0 &&  <Button 
                        variant='contained' 
                        color='secondary'                         
                        size='large' 
                        onClick={() => setStage(stage - 1)}>Previous</Button>}
             {stage < 5 && <Button 
                        variant='contained' 
                        color='primary'                         
                        size='large' 
                        onClick={() => setStage(stage + 1)}>Next</Button>}
              {stage === 5 && <Button 
                        variant='contained' 
                        color='primary'                         
                        size='large' 
                        onClick={handleFormSubmit}>Finish and Send</Button>}
      </FormControl>
  )
}

export default NewStoreForm
