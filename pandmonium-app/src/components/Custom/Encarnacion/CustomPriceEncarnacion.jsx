import React, { Component } from 'react';
import '../style.scss';

import hamburger from '../../../assets/img/hamburger.png';

class CustomPriceEncarnacion extends Component {

  handleChecketEncarnacion = (e) => {
    console.log(e.target.value);
    const election = e.target.value;
     
    localStorage.setItem('encarnacion', JSON.stringify(election)); 
  }

  render(){
    return(
      <div className="price-custom">
        <figure className='figure-custom'>
          <img src={hamburger} alt="#"/>
        </figure>
        <div className="option-price">
          {/* <p>{this.props.data.classic}</p>
          <p>{this.props.data.combo}</p> */}
          <div>
            <label htmlFor="classic" name="check" >Classic</label>
            <input 
                name="check"
                id="classic" 
                type="radio" 
                value="Encarnacion classic" 
                onChange={this.handleChecketEncarnacion}
            />
          </div>
          <div>
            <label htmlFor="combo" name="check" >Combo</label>
            <input 
                name="check"
                id="combo" 
                type="radio" 
                value="Encarnacion combo" 
                onChange={this.handleChecketEncarnacion}
            />
          </div>

        </div>
      </div>
    )
  }
}

export default CustomPriceEncarnacion;