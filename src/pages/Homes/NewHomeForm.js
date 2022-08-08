import React, { useState } from 'react'
import useNewHomeForm from '../../components/Homes/useNewHomeForm'
import '../../App.css'
import './NewHomeForm.css'
import BasicData from '../../components/Homes/BasicData'
import AddressData from '../../components/Homes/AddressData'
import Amenities from '../../components/Homes/AmenitiesData'
import Highlights from '../../components/Homes/HighlightsData'
import RulesAcessibility from '../../components/Homes/RulesAcessibilityData'

const NewHomeForm = ({ homeForm }) => {
  const { handleFormSubmit } = useNewHomeForm(
    homeForm
  )

  const [stage, setStage] = useState(0)

  return (
    <div className="hero-container">
    <div className="container">
        <div className="app-wrapper">
            <h2 className="label">Fill the fields to create a new Home</h2>
        </div>
        {stage === 0 && <BasicData/>}
        {stage === 1 && <AddressData/>}
        {stage === 2 && <Amenities/>}
        {stage === 3 && <Highlights/>}
        {stage === 4 && <RulesAcessibility/>}
            <div className='button'>
                {stage > 0 && <button className="btn--outline" onClick={() => setStage(stage - 1)}>Previous</button>}
                {stage < 4 && <button className="btn--outline" onClick={() => setStage(stage + 1)}>Next</button>}
                {stage === 4 && <button className="btn--outline" onClick={handleFormSubmit}>Login</button>}
            </div>
    </div>
</div>
  )
}

export default NewHomeForm
