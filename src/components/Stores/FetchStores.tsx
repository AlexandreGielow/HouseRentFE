import React, { useEffect, useState } from 'react'
import CardItem from '../Utils/CardItem'

interface Store {
  id: number;
  name: string;
  type: string;
  rooms: number;
  size: number;
  value: number;
  startRent: string;
  endRent: string;
  address: {
    city: string;
    region: string;
  };
}

export const FetchStores = ({filter}: {filter: string}) => {
  const [Stores, setStores] = useState<Store[]>([])
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
    const getStores = async () => {
      var response = null
      if (filter.length>0){
         response = await fetch(`https://localhost:7023/api/v1/Stores/search/${filter}`, requestOptions)
      }
      else
      { 
        response = await fetch('https://localhost:7023/api/v1/Stores', requestOptions)
      }
      const json = await response.json()
      setStores(json)
    }
    getStores()
  }, [filter, setStores])

  if (Stores.length <= 0) {
    return <h1>There is No Stores with this filter</h1>
  }
  return (
  <>
    {
      Stores.map(property => (
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

export default FetchStores
