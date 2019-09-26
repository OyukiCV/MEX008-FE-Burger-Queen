import React, { Component } from 'react';

class SelectionTypeFood extends Component {
  render(){
    return(
      <div className="cuadro">
       <img className="icon-food" alt={this.props.name} src={this.props.icon}/> 
       <div>
         <p>{this.props.option1}</p> <input type="checkbox"/>
         <p>{this.props.option2}</p> <input type="checkbox"/>
         <p>{this.props.option3}</p> <input type="checkbox"/>
       </div>
      </div>
    )
  }
}

export default SelectionTypeFood;