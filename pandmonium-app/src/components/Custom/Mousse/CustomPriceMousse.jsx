import React, { Component } from 'react';
import '../style.scss';

import postre from '../../../assets/img/postre.png';

class CustomPriceMousse extends Component {

  handleChecketMousse = (e) => {
    console.log(e.target.value);
    const election = e.target.value;
     
    localStorage.setItem('mousse', JSON.stringify(election)); 
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
            <label htmlFor="classic" name="check" >Mousse</label>
            <input 
                name="check"
                id="classic" 
                type="radio" 
                value="Mousse" 
                onChange={this.handleChecketMousse}
            />
          </div>
         

        </div>
      </div>
    )
  }
}

export default CustomPriceMousse;