import React, { useState } from 'react'
import OrderBasicData from '../../components/Orders/OrderBasicData'
import OrderItem from '../../components/Orders/OrderItem'
import OrderSummary from '../../components/Orders/OrderSummary'
import useNewOrderForm from '../../components/Orders/useNewOrderForm'
import Button from '@mui/material/Button'
import { FormControl, Box } from '@mui/material'

const NewOrderForm = ({ orderForm }) => {
  const { handleFormSubmit } = useNewOrderForm(
    orderForm
  )

  const [stage, setStage] = useState(0)

  return (
      <FormControl sx={{ m: 1, minWidth: 120 }}   variant='standard'>
        <Box  sx={{borderRadius:3 , backgroundColor: 'black', color: 'white', width: '450px', margin: 'auto', marginTop: '10px', padding: '30px'}} maxWidth='sm' >
          <h2 className="label">Fill the fields to create a new Order - Step {stage+1} of 3</h2>
        </Box>
        {stage === 0 && <OrderBasicData/>}
        {stage === 1 && <OrderItem/>}
        {stage === 2 && <OrderSummary/>}
             {stage > 0 &&  <Button 
                        variant='contained' 
                        color='secondary'                         
                        size='large' 
                        style={{fontSize: 14}} 
                        onClick={() => setStage(stage - 1)}>Previous</Button>}
             {stage < 2 && <Button 
                        variant='contained' 
                        color='primary'                         
                        size='large' 
                        style={{fontSize: 14}} 
                        onClick={() => setStage(stage + 1)}>Next</Button>}
              {stage === 2 && <Button 
                        variant='contained' 
                        color='primary'                         
                        size='large' 
                        style={{fontSize: 14}}  
                        onClick={handleFormSubmit}>Finish and Send</Button>}
      </FormControl>
  )
}

export default NewOrderForm
