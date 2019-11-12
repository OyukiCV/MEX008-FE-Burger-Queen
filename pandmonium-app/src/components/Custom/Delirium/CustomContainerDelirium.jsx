import React, { Component } from 'react';
import IngredientsDelirium from './IngredientsDelirium';
import CustomPriceDelirium from './CustomPriceDelirium';
import '../style.scss';
import BtnCustomOrderDelirium from './BtnCustomOrderDelirium';

//LocalStorage
// import '../LocalStorage/LocalStorage';

class CustomContainerDelirium extends Component {
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
        <CustomPriceDelirium />
        <IngredientsDelirium />
        {/* <div className="buttonOrder">
          <button type='button' onClick={this.showModal}> Añadir Pedido </button>
        </div> */}
        <BtnCustomOrderDelirium />
        {/* <Modal id='modalid' 
        show={this.state.show}
        /> */}
      </div>
    );
  };     
};

export default CustomContainerDelirium;

