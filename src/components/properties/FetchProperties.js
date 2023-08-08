import React, { useEffect, useState } from 'react'
import CardItem from '../CardItem'

export const FetchProperties = ({filter}) => {
  const [properties, setProperties] = useState([])
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      json: true,
      headers: new Headers({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
        'Content-Type': 'application/json'
      })
    }
    const getProperties = async () => {
      var response = null
      if (filter.length>0){
         response = await fetch(`https://localhost:7023/api/Property/search/${filter}`, requestOptions)
      }
      else
      { 
        response = await fetch('https://localhost:7023/api/Property', requestOptions)
      }
      const json = await response.json()
      setProperties(json)
    }
    getProperties()
  }, [filter, setProperties])

  if (properties.length <= 0) {
    return <h1>There is No Properties with this filter</h1>
  }
  return (
  <>
    {
      properties.map(property => (
        <CardItem
        key={property.id}
        name={property.name}
        type={property.type}
        rooms={property.rooms}
        size={property.size}
        city={property.address.city}
        district={property.address.region}
        value={property.value}
        startDate={property.startRent}
        endDate={property.endRent}
        image='../images/apartamento.png'
      />
      ))
    }
  </>)
}

export default FetchProperties
