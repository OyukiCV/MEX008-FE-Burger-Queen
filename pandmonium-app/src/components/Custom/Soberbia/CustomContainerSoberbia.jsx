import React, { Component } from 'react';
import IngredientsSoberbia from './IngredientsSoberbia';
import CustomPriceSoberbia from './CustomPriceSoberbia';
import '../style.scss';
import BtnCustomOrderSoberbia from './BtnCustomOrderSoberbia';

//LocalStorage
// import '../LocalStorage/LocalStorage';

class CustomContainerSoberbia extends Component {
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
        <CustomPriceSoberbia />
        <IngredientsSoberbia />
        {/* <div className="buttonOrder">
          <button type='button' onClick={this.showModal}> Añadir Pedido </button>
        </div> */}
        <BtnCustomOrderSoberbia />
        {/* <Modal id='modalid' 
        show={this.state.show}
        /> */}
      </div>
    );
  };     
};

export default CustomContainerSoberbia;

