import React, { Component } from 'react';
import IngredientsPitBull from './IngredientsPitBull';
import CustomPricePitBull from './CustomPricePitBull';
import '../style.scss';
import BtnCustomOrderPitBull from './BtnCustomOrderPitBull';

//LocalStorage
// import '../LocalStorage/LocalStorage';

class CustomContainerPitBull extends Component {
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
        <CustomPricePitBull />
        <IngredientsPitBull />
        {/* <div className="buttonOrder">
          <button type='button' onClick={this.showModal}> Añadir Pedido </button>
        </div> */}
        <BtnCustomOrderPitBull />
        {/* <Modal id='modalid' 
        show={this.state.show}
        /> */}
      </div>
    );
  };     
};

export default CustomContainerPitBull;

