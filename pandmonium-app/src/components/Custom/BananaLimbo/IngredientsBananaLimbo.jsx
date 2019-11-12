import React, { Component } from "react";
import '../style.scss';

class IngredientsBananaLimbo extends Component {

  render(){
    return(
      <div className="ingredientsOptions">
        {/* <p>{this.props.data.description}</p> */}
        <p>Croqueta de plátano macho <br/> 
        Empanizado con Panko <br/>  
        En cama de lechuga <br/>  
        Queso americano <br/>  
        Bañada con salsas de frijol <br/> 
        Y chile pasilla
        </p>
      </div>
    )
  }
}

export default IngredientsBananaLimbo;