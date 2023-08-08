import React, {useState } from 'react'
import { FetchProperties } from './properties/FetchProperties'
import './Cards.css'
import './CardItem.css'
import Maps from './Maps'
import { FormControl, TextField } from '@mui/material'

function Cards () {
  const [searchCity, setSearchCity] = useState('')
  const [searchFilter, setSearchFilter] = useState('')
  return (
    <div>
      <div>
        <h1>Check out our best homes!</h1>
      </div>
      <div className='mainHomes'>
        <div className='listHouses'>
            <FormControl fullWidth>
            <TextField 
              id="outlined-basic" 
              label="Find by something" 
              variant="outlined"
              value={searchFilter}
              onChange={(event) => setSearchFilter(event.target.value)} />                      
            <TextField 
              id="outlined-basic" 
              label="Find by City" 
              variant="outlined"
              value={searchCity}
              onChange={(event) => setSearchCity(event.target.value)} />   
          </FormControl>
            <FetchProperties
            filter={searchFilter}/>
        </div>
        <div className='maps'>
          <Maps/>
        </div>
      </div>
</div>
  )
}

export default Cards
