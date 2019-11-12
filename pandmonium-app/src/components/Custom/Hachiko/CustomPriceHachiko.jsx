import React, { Component } from 'react';
import '../style.scss';

import hotdog from '../../../assets/img/jocho.png';

class CustomPriceHachiko extends Component {

  handleChecketHachiko = (e) => {
    console.log(e.target.value);
    const election = e.target.value;
     
    localStorage.setItem('hachiko', JSON.stringify(election)); 
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
                value="Hachiko sencilla" 
                onChange={this.handleChecketHachiko}
            />
          </div>
          <div>
            <label htmlFor="combo" name="check" >Combo</label>
            <input 
                name="check"
                id="combo" 
                type="radio" 
                value="Hachiko combo" 
                onChange={this.handleChecketHachiko}
            />
          </div>

        </div>
      </div>
    )
  }
}

export default CustomPriceHachiko;