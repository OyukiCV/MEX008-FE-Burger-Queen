import React, { Component } from 'react';
import '../style.scss';

import hotdog from '../../../assets/img/jocho.png';

class CustomPriceXoloescuintle extends Component {

  handleChecketXoloescuintle = (e) => {
    console.log(e.target.value);
    const election = e.target.value;
     
    localStorage.setItem('xoloescuintle', JSON.stringify(election)); 
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
                value="Xoloescuintle sencilla" 
                onChange={this.handleChecketXoloescuintle}
            />
          </div>
          <div>
            <label htmlFor="combo" name="check" >Combo</label>
            <input 
                name="check"
                id="combo" 
                type="radio" 
                value="Xoloescuintle combo" 
                onChange={this.handleChecketXoloescuintle}
            />
          </div>

        </div>
      </div>
    )
  }
}

export default CustomPriceXoloescuintle;