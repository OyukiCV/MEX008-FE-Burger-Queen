import React, { Component } from 'react';
import GeneralSelectionTypeFood from './GeneralSelectionTypeFood';
import GeneralBtnOrder from './GeneralBtnOrder.jsx';
import GeneralIngredients from './GeneralIngredients.jsx';



class GeneralViewCustom extends Component {
  render(){
    return(
      <div>
        <GeneralSelectionTypeFood option1="sencilla"  option2="combo" />,
        <GeneralIngredients text1 = "Componente"/>,
        <GeneralBtnOrder />
      </div> 
    );

  }
}

export default GeneralViewCustom;