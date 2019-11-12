import React, { Component } from 'react';
import IngredientsPan from './IngredientsPan';
import CustomPricePan from './CustomPricePan';
import '../style.scss';
import BtnCustomOrderPan from './BtnCustomOrderPan';

//LocalStorage
// import '../LocalStorage/LocalStorage';

class CustomContainerPan extends Component {
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
        <CustomPricePan />
        <IngredientsPan />
        {/* <div className="buttonOrder">
          <button type='button' onClick={this.showModal}> Añadir Pedido </button>
        </div> */}
        <BtnCustomOrderPan />
        {/* <Modal id='modalid' 
        show={this.state.show}
        /> */}
      </div>
    );
  };     
};

export default CustomContainerPan;

