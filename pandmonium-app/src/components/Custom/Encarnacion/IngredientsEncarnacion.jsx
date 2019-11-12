import React, { Component } from "react";
import '../style.scss';

class IngredientsEncarnacion extends Component {

  render(){
    return(
      <div className="ingredientsOptions">
        {/* <p>{this.props.data.description}</p> */}
        <p>Chorizo de PODEROSA <br/>
         En cama de lechuga <br />
         Acompañado de salsa pico de gallo <br/> 
         Y chimichurri con veganesa extra
        </p>
      </div>
    )
  }
}

export default IngredientsEncarnacion;