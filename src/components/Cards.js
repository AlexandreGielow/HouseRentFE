import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Property from '../Model/Property';
import './Button.css';

const Properties = () => {

var escambau = []   
var kaka = "";


for(var i=0; i < 3; i++){

  kaka = 
  <div className='cards__container'>
  <div className='cards__wrapper'>          
    <ul className='cards__items'>
      <CardItem
        name='House'
        path='/services'
        type='House'
        rooms='4'
        size='120'
        city='Gaspar'
        district='Centro'
        value='1800'
        startDate='01/09/2022'
        endDate='until further notice'
        image='../images/casa.png'
      />            
      </ul>
      </div>
    </div>

    escambau.push(kaka);
}
  return(escambau);
};


const  RetrieveProperties = async ()=> {  
  const requestOptions = {
    method: 'GET',            
    json: true,
    headers: new Headers({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
        'Content-Type': 'application/json'
    }),
  };        
  const response = await  fetch('https://localhost:44307/api/Property', requestOptions);    

}


function Cards(props) {

  return (
    <div className='cards'>
      <h1>Check out our best homes!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>          
          <ul className='cards__items'>
            <CardItem
              name='Apartment'
              path='/services'
              type='Apartment'
              rooms='2'
              size='55'
              city='Blumenau'
              district='Garcia'
              value='1400'
              startDate='01/09/2022'
              endDate='01/19/2023'
              image='../images/apartamento.png'
            />            
            </ul>
        </div>
      </div>
      <Properties/>
      <div>
        <button className="btn--primary" onClick={RetrieveProperties}>teste</button>
      </div>
      
    </div>
    
  );
}

export default Cards;