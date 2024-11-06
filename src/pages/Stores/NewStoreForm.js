import React, { useState } from 'react'
import AddressData from '../../components/Stores/AddressData'
import UploadPhotos from '../../components/Stores/UploadPhotos'
import StoreBasicData from '../../components/Stores/StoreBasicData'
import useNewStoreForm from '../../components/Stores/useNewStoreForm'
import Button from '@mui/material/Button'
import { FormControl, Box } from '@mui/material'

const NewStoreForm = ({ storeForm }) => {
  const { handleFormSubmit } = useNewStoreForm(
    storeForm
  )

  const [stage, setStage] = useState(0)

  return (
      <FormControl sx={{ m: 1, minWidth: 120 }}   variant='standard'>
        <Box  sx={{borderRadius:3 , backgroundColor: 'black', color: 'white', minWidth: '550px', margin: 'auto', marginTop: '10px', padding: '30px'}} maxWidth='sm' >
          <h2 className="label">Fill the fields to create a new Home Step {stage+1} of 6</h2>
        </Box>
        {stage === 0 && <StoreBasicData/>}
        {stage === 1 && <AddressData/>}
        {stage === 5 && <UploadPhotos/>}
             {stage > 0 &&  <Button 
                        variant='contained' 
                        color='secondary'                         
                        size='large' 
                        style={{fontSize: 14}} 
                        onClick={() => setStage(stage - 1)}>Previous</Button>}
             {stage < 5 && <Button 
                        variant='contained' 
                        color='primary'                         
                        size='large' 
                        style={{fontSize: 14}} 
                        onClick={() => setStage(stage + 1)}>Next</Button>}
              {stage === 5 && <Button 
                        variant='contained' 
                        color='primary'                         
                        size='large' 
                        style={{fontSize: 14}}  
                        onClick={handleFormSubmit}>Finish and Send</Button>}
      </FormControl>
  )
}

export default NewStoreForm
