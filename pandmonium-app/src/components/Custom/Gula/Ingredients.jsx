import React, { Component } from "react";
import '../style.scss';
//import CheckBox from './CheckBox';

class Ingredients extends Component {
  handleChecket = (e) => {
    console.log(e.target.value);
    const checked = e.target.value;

    localStorage.setItem('extra', JSON.stringify(checked)); 
  }

  render(){
    return(
      <div className="ingredientsOptions">
        {/* <p>{this.props.data.description}</p> */}

        <p>Mezcla de vegetales con: <br/> 
          Avena, Garam y Lechuga <br/> 
          Masala - Especias indúes  <br/> 
          Jitomate <br/> 
          Germinado de alfalfa <br/> 
          Pepinillos
        </p>
        <div class="extra-container">

          <label htmlFor="Hawaiana" name="hawaiana" >Vuélvela Hawaiana <br/>+ $20
              <input 
                  name="hawaiana"
                  id="hawaiana" 
                  type="radio" 
                  value="Vuelvela Hawaiana" 
                  onChange={this.handleChecket}
              />
          </label>

          <label htmlFor="Americano" name="americano" >Queso tipo Americano <br/>+ $15
              <input 
                  name="americano"
                  id="hawaiana" 
                  type="radio" 
                  value="Queso tipo Americano" 
                  onChange={this.handleChecket}
              />
          </label>
          
          <label htmlFor="Papa" name="quesopapa" >Queso de Papa <br/>+ $10
              <input 
                  name="quesopapa"
                  id="quesopapa" 
                  type="radio" 
                  value="Queso de Papa" 
                  onChange={this.handleChecket}
              />
          </label>
        </div>

      </div>
    )
  }
}

export default Ingredients;