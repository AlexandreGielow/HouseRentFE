import React from 'react'
import { FetchProperties } from './FetchProperties'
import './Cards.css'
import './Button.css'
import './CardItem.css'

function Cards () {
  return (
    <div className='cards'>
      <h1>Check out our best homes!</h1>
              <FetchProperties/>
      </div>
  )
}

export default Cards
