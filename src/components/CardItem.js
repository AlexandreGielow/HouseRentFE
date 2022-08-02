import React, { useState, useEffect } from 'react'
import './CardItem.css'
import './Cards.css'

function CardItem (props) {
  const [houseType, setHouseType] = useState('')

  const showHouseType = () => {
    switch (props.type) {
      case 0:
        setHouseType('Room In House')
        break
      case 1:
        setHouseType('House')
        break
      case 2:
        setHouseType('Apartment')
        break
      default:
        setHouseType('Wrong Type')
    }
  }
  useEffect(() => {
    showHouseType()
  }, [showHouseType])
  return (
    <div className='cards__container'>
      <div className='cards__wrapper'>
        <ul className='cards__item'>
        <div>
          <img className='image' src={props.image}></img>
        </div>
        <div key={props.id}>
            <ul className='titleGroup'>
              <h1 className='title'>{houseType} • </h1>
              <h1 className='title'>{props.rooms} rooms • </h1>
              <h1 className='title'>{props.size}m²</h1>
            </ul>
          <h1 className='adress_district'>{props.district}</h1>
          <h1 className='adress_city'>{props.city}</h1>
          <h5 className='datesh5'>
            <div className='dates'>{props.startDate} </div>
            <div className='seta'></div>
            <div className='dates'>{props.endDate} </div>
          </h5>
          <h3 className='value'>R$: {props.value}</h3>
        </div>
      </ul>
    </div>
    <div className='horizontalDivider'></div>
  </div>
  )
}

export default CardItem
