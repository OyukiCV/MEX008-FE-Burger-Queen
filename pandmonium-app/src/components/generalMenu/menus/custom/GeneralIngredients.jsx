import React, { Component } from 'react';

class GeneralIngredients extends Component {
  render(){
    return(
      <div>
        <p>{this.props.text1}</p> 
        <p>{this.props.text2}</p>
        <p>{this.props.text3}</p><input type = "checkbox"/>
        <p>{this.props.text4}</p><input type = "checkbox"/>
        <p>{this.props.text5}</p><input type = "checkbox"/>
        <p>{this.props.text6}</p><input type = "checkbox"/>
        <p>{this.props.text7}</p><input type = "checkbox"/>
        <p>{this.props.text8}</p><input type = "checkbox"/>
      </div>
    )
  }
}

export default GeneralIngredients;