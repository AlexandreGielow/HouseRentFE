import React from 'react';
import { Link } from 'react-router-dom';
import Property from '../Model/Property';
import './CardItem.css';

function CardItem(props) {

  return (
    <>
      <li className='cards__item'>
        <Link className='cardgeneral' to={props.path}>
        <div>
          <img className='image' src={props.image}></img>
        </div>
        <div>
            <ul className='titleGroup'>
              <li className='title'>{props.type} • </li>
              <li className='title'>{props.rooms} rooms • </li>
              <li className='title'>{props.size}m²</li>          
            </ul>
          <li className='adress_district'>{props.district}</li>
          <li className='adress_city'>{props.city}</li>
          <h5 className='datesh5'>
            <div className='dates'>{props.startDate} </div>
            <div className='seta'></div>
            <div className='dates'>{props.endDate} </div>          
          </h5>
          <h3 className='value'>R$: {props.value}</h3>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;