import React, { Component } from "react";
import '../style.scss';

class IngredientsMousse extends Component {

  render(){
    return(
      <div className="ingredientsOptions">
        {/* <p>{this.props.data.description}</p> */}
        <p>
          Mousse de tofu y limón, <br /> 
          Mix de semillas y <br /> 
          dátiles.
        </p>

         
      </div>
    )
  }
}

export default IngredientsMousse;


