import React, { Component } from 'react';
import IngredientsBananaLimbo from './IngredientsBananaLimbo';
import CustomPriceBananaLimbo from './CustomPriceBananaLimbo';
import '../style.scss';
import BtnCustomOrderBananaLimbo from './BtnCustomOrderBananaLimbo';

//LocalStorage
// import '../LocalStorage/LocalStorage';

class CustomContainerBananaLimbo extends Component {
  // state = { show: false };

  // showModal = () => {
  //   this.setState({ show: true });
  // };


  // hideModal = () => {
  //   this.setState({ show: false });
  // }
 

  render(){
  
    return(
      <div className="customContainerPrincipal">
        <CustomPriceBananaLimbo />
        <IngredientsBananaLimbo />
        <BtnCustomOrderBananaLimbo />
      </div>
    );
  };     
};

export default CustomContainerBananaLimbo;

