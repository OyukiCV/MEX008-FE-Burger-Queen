import React, { Component } from 'react';
import '../style.scss';

import hotdog from '../../../assets/img/jocho.png';

class CustomPricePitBull extends Component {

  handleChecketPitBull = (e) => {
    console.log(e.target.value);
    const election = e.target.value;
     
    localStorage.setItem('pitbull', JSON.stringify(election)); 
  }

  render(){
    return(
      <div className="price-custom">
        <figure className='figure-custom'>
          <img src={hotdog} alt="#"/>
        </figure>
        <div className="option-price">
          {/* <p>{this.props.data.classic}</p>
          <p>{this.props.data.combo}</p> */}
          <div>
            <label htmlFor="classic" name="check" >Sencilla</label>
            <input 
                name="check"
                id="classic" 
                type="radio" 
                value="PitBull sencilla" 
                onChange={this.handleChecketPitBull}
            />
          </div>
          <div>
            <label htmlFor="combo" name="check" >Combo</label>
            <input 
                name="check"
                id="combo" 
                type="radio" 
                value="PitBull combo" 
                onChange={this.handleChecketPitBull}
            />
          </div>

        </div>
      </div>
    )
  }
}

export default CustomPricePitBull;