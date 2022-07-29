import React from 'react'
import { FetchProperties } from './properties/FetchProperties'
import './Cards.css'
import './Button.css'
import './CardItem.css'

function Cards () {
  return (
    <div className='cards'>
      <h1>Check out our best homes!</h1>
      <div className='locationFilter' >
        <div data-icon="search">lupinha</div>
        <div className='cityFilter' placeholder='Search cities and areas'>

        </div>
      </div>
              <FetchProperties/>
      </div>
  )
}

export default Cards
