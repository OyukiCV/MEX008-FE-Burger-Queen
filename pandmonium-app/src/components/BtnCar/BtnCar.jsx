import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import car from '../../assets/img/car.png';
import './style.css';

class Car extends Component{
  render(){
    return(
      <Link to={{pathname: './carrito'}}>
        <button className='btn-carrito'>
          <img className='carrito' src={car} alt="carrito"/>
        </button>
      </Link>
    )
  }
}

export default Car;