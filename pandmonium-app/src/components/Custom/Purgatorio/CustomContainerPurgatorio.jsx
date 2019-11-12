import React, { Component } from 'react';
import IngredientsPurgatorio from './IngredientsPurgatorio';
import CustomPricePurgatorio from './CustomPricePurgatorio';
import '../style.scss';
import BtnCustomOrderPurgatorio from './BtnCustomOrderPurgatorio';

//LocalStorage
// import '../LocalStorage/LocalStorage';

class CustomContainerPurgatorio extends Component {
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
        <CustomPricePurgatorio />
        <IngredientsPurgatorio />
        {/* <div className="buttonOrder">
          <button type='button' onClick={this.showModal}> Añadir Pedido </button>
        </div> */}
        <BtnCustomOrderPurgatorio />
        {/* <Modal id='modalid' 
        show={this.state.show}
        /> */}
      </div>
    );
  };     
};

export default CustomContainerPurgatorio;

