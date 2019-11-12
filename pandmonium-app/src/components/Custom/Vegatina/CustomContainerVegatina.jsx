import React, { Component } from 'react';
import IngredientsVegatina from './IngredientsVegatina';
import CustomPriceVegatina from './CustomPriceVegatina';
import '../style.scss';
import BtnCustomOrderVegatina from './BtnCustomOrderVegatina';

//LocalStorage
// import '../LocalStorage/LocalStorage';

class CustomContainerVegatina extends Component {
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
        <CustomPriceVegatina />
        <IngredientsVegatina />
        {/* <div className="buttonOrder">
          <button type='button' onClick={this.showModal}> Añadir Pedido </button>
        </div> */}
        <BtnCustomOrderVegatina />
        {/* <Modal id='modalid' 
        show={this.state.show}
        /> */}
      </div>
    );
  };     
};

export default CustomContainerVegatina;

