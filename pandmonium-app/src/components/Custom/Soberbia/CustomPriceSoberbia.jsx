import React, { Component } from 'react';
import '../style.scss';

import hamburger from '../../../assets/img/hamburger.png';

class CustomPriceSoberbia extends Component {

  handleChecketSoberbia = (e) => {
    console.log(e.target.value);
    const election = e.target.value;
     

    localStorage.setItem('soberbia', JSON.stringify(election)); 
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
                value="Soberbia classic" 
                onChange={this.handleChecketSoberbia}
            />
          </div>
          <div>
            <label htmlFor="combo" name="check" >Combo</label>
            <input 
                name="check"
                id="combo" 
                type="radio" 
                value="Soberbia combo" 
                onChange={this.handleChecketSoberbia}
            />
          </div>

        </div>
      </div>
    )
  }
}

export default CustomPriceSoberbia;