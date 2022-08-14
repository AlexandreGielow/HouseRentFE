import React, { useState, useEffect } from 'react'
import './CardItem.css'
import './Cards.css'
import { Box, Typography, Paper } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { styled } from '@mui/material/styles';

function CardItem (props) {
  const [houseType, setHouseType] = useState('')

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

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
    <Box sx={ {background: '#333333', display: 'flex', flexDirection: 'column', justifyContent: 'center', width:'550px', borderRadius:3, padding:'10px', marginTop:'5px' } }>
    <Grid container spacing={2}>
      <Grid xl={4}>
        <img className='image' src={props.image}></img>
      </Grid>
      <Grid xl={8}>
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
      </Grid>
    </Grid>

  </Box>
  )
}

export default CardItem
