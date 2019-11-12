import React, { Component } from 'react';
import IngredientsSodoma from './IngredientsSodoma';
import CustomPriceSodoma from './CustomPriceSodoma';
import '../style.scss';
import BtnCustomOrderSodoma from './BtnCustomOrderSodoma';

//LocalStorage
// import '../LocalStorage/LocalStorage';

class CustomContainerSodoma extends Component {
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
        <CustomPriceSodoma />
        <IngredientsSodoma />
        {/* <div className="buttonOrder">
          <button type='button' onClick={this.showModal}> Añadir Pedido </button>
        </div> */}
        <BtnCustomOrderSodoma />
        {/* <Modal id='modalid' 
        show={this.state.show}
        /> */}
      </div>
    );
  };     
};

export default CustomContainerSodoma;

