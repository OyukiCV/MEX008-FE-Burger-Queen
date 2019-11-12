import React, { Component } from 'react';
import '../style.scss';

import hamburger from '../../../assets/img/hamburger.png';

class CustomPriceMalicia extends Component {

  handleChecketMalicia = (e) => {
    console.log(e.target.value);
    const election = e.target.value;
     
    localStorage.setItem('malicia', JSON.stringify(election)); 
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
                value="Malicia classic" 
                onChange={this.handleChecketMalicia}
            />
          </div>
          <div>
            <label htmlFor="combo" name="check" >Combo</label>
            <input 
                name="check"
                id="combo" 
                type="radio" 
                value="Malicia combo" 
                onChange={this.handleChecketMalicia}
            />
          </div>

        </div>
      </div>
    )
  }
}

export default CustomPriceMalicia;