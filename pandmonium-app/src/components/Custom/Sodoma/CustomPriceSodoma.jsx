import React, { Component } from 'react';
import '../style.scss';

import pizza from '../../../assets/img/pizza.png';

class CustomPriceSodoma extends Component {

  handleChecketSodoma = (e) => {
    console.log(e.target.value);
    const election = e.target.value;
     
    localStorage.setItem('sodoma', JSON.stringify(election)); 
  }

  render(){
    return(
      <div className="price-custom">
        <figure className='figure-custom'>
          <img src={pizza} alt="#"/>
        </figure>
        <div className="option-price">
          {/* <p>{this.props.data.classic}</p>
          <p>{this.props.data.combo}</p> */}
          <div>
            <label htmlFor="classic" name="check" >Chica</label>
            <input 
                name="check"
                id="chica" 
                type="radio" 
                value="Sodoma chica" 
                onChange={this.handleChecketSodoma}
            />
          </div>
          <div>
            <label htmlFor="combo" name="check" >Mediana</label>
            <input 
                name="check"
                id="mediana" 
                type="radio" 
                value="Sodoma mediana" 
                onChange={this.handleChecketSodoma}
            />
          </div>
          <div>
            <label htmlFor="combo" name="check" >Grande</label>
            <input 
                name="check"
                id="grande" 
                type="radio" 
                value="Sodoma grande" 
                onChange={this.handleChecketSodoma}
            />
          </div>

        </div>
      </div>
    )
  }
}

export default CustomPriceSodoma;