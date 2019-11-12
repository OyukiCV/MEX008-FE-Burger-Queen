import React, { Component } from "react";
import '../style.scss';

class IngredientsAlmaEnPena extends Component {

  render(){
    return(
      <div className="ingredientsOptions">
        {/* <p>{this.props.data.description}</p> */}
        <p>
          Medallón de espinaca <br /> 
          Betabel y arroz en cama de lechuga <br /> 
          con queso tipo americano <br /> 
          Iitomate <br /> 
          Pepinillo <br /> 
          Cebolla al grill
        </p>
      </div>
    )
  }
}

export default IngredientsAlmaEnPena;


