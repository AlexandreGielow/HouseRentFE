import React, { useState } from 'react'
import useNewHomeForm from '../../components/Homes/useNewHomeForm'
import '../../App.css'
import './NewHomeForm.css'
import BasicData from '../../components/Homes/BasicData'
import AddressData from '../../components/Homes/AddressData'
import Amenities from '../../components/Homes/AmenitiesData'
import Highlights from '../../components/Homes/HighlightsData'
import RulesAcessibility from '../../components/Homes/RulesAcessibilityData'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'

const NewHomeForm = ({ homeForm }) => {
  const { handleFormSubmit } = useNewHomeForm(
    homeForm
  )

  const [stage, setStage] = useState(0)

  return (
    <div className="hero-container">
      <FormControl sx={{ m: 1, minWidth: 120, paddingTop: 30 }} margin='normal'  variant="filled">
        <div className="app-wrapper">
          <h2 className="label">Fill the fields to create a new Home</h2>
        </div>
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
                        color='secondary'                         
                        size='large' 
                        style={{fontSize: 14}} 
                        onClick={() => setStage(stage + 1)}>Next</Button>}
              {stage === 4 && <Button 
                        variant='contained' 
                        color='secondary'                         
                        size='large' 
                        style={{fontSize: 14}}  
                        onClick={handleFormSubmit}>Login</Button>}
      </FormControl>
    </div>
  )
}

export default NewHomeForm
