import React from 'react'
import { FetchProperties } from './properties/FetchProperties'
import './Cards.css'
import './Button.css'
import './CardItem.css'
import Maps from './Maps'

function Cards () {
  return (
    <div>
      <div>
        <h1>Check out our best homes!</h1>
      </div>
      <div className='mainHomes'>
        <div className='listHouses'>
          <div>
            <div className='locationFilter' >
              <div data-icon="search">
            </div>
          <div className='cityFilter' placeholder='Search cities and areas'></div>
        </div>
        </div>
          <div>
            <FetchProperties/>
          </div>
        </div>
        <div className='maps'>
          <Maps/>
        </div>
      </div>
</div>
  )
}

export default Cards
