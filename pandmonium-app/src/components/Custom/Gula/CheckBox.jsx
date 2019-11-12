import React, { Component } from "react";
import '../style.scss';

class CheckBox extends Component {
    render(){
      return(
        <div>
          <input className="checkbox"
            name="uno"
            type="checkbox"
            />
        </div>
      )
    }
  }
  
  export default CheckBox;
