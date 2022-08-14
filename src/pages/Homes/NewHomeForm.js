import React, { useState } from 'react'
import useNewHomeForm from '../../components/Homes/useNewHomeForm'
import BasicData from '../../components/Homes/BasicData'
import AddressData from '../../components/Homes/AddressData'
import Amenities from '../../components/Homes/AmenitiesData'
import Highlights from '../../components/Homes/HighlightsData'
import RulesAcessibility from '../../components/Homes/RulesAcessibilityData'
import Button from '@mui/material/Button'
import { FormControl, Box } from '@mui/material'

const NewHomeForm = ({ homeForm }) => {
  const { handleFormSubmit } = useNewHomeForm(
    homeForm
  )

  const [stage, setStage] = useState(0)

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }} margin='normal'  variant='standard'>
        <Box  sx={{borderRadius:3}} maxWidth='sm' className="container">
          <h2 className="label">Fill the fields to create a new Home</h2>
        </Box>
        {stage === 0 && <BasicData/>}
        {stage === 1 && <AddressData/>}
        {stage === 2 && <Amenities/>}
        {stage === 3 && <Highlights/>}
        {stage === 4 && <RulesAcessibility/>}
             {stage > 0 &&  <Button 
                        variant='contained' 
                        color='secondary'                         
                        size='large' 
                        style={{fontSize: 14}} 
                        onClick={() => setStage(stage - 1)}>Previous</Button>}
             {stage < 4 && <Button 
                        variant='contained' 
                        color='primary'                         
                        size='large' 
                        style={{fontSize: 14}} 
                        onClick={() => setStage(stage + 1)}>Next</Button>}
              {stage === 4 && <Button 
                        variant='contained' 
                        color='primary'                         
                        size='large' 
                        style={{fontSize: 14}}  
                        onClick={handleFormSubmit}>Login</Button>}
      </FormControl>
    </>
  )
}

export default NewHomeForm
