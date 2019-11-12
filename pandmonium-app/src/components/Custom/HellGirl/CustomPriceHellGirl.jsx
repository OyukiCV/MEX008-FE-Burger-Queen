import React, { Component } from 'react';
import '../style.scss';

import postre from '../../../assets/img/postre.png';

class CustomPriceHellGirl extends Component {

  handleChecketHellGirl = (e) => {
    console.log(e.target.value);
    const election = e.target.value;
     
    localStorage.setItem('hellgirl', JSON.stringify(election)); 
  }

  render(){
    return(
      <div className="price-custom">
        <figure className='figure-custom'>
          <img src={postre} alt="#"/>
        </figure>
        <div className="option-price">
          {/* <p>{this.props.data.classic}</p>
          <p>{this.props.data.combo}</p> */}
          <div>
            <label htmlFor="classic" name="check" >Hell girl</label>
            <input 
                name="check"
                id="classic" 
                type="radio" 
                value="Hell Girl" 
                onChange={this.handleChecketHellGirl}
            />
          </div>
         

        </div>
      </div>
    )
  }
}

export default CustomPriceHellGirl;