import React, { Component } from 'react';
import IngredientsTikiHawaiana from './IngredientsTikiHawaiana';
import CustomPriceTikiHawaiana from './CustomPriceTikiHawaiana';
import '../style.scss';
import BtnCustomOrderTikiHawaiana from './BtnCustomOrderTikiHawaiana';

//LocalStorage
// import '../LocalStorage/LocalStorage';

class CustomContainerTikiHawaiana extends Component {
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
        <CustomPriceTikiHawaiana />
        <IngredientsTikiHawaiana />
        {/* <div className="buttonOrder">
          <button type='button' onClick={this.showModal}> Añadir Pedido </button>
        </div> */}
        <BtnCustomOrderTikiHawaiana />
        {/* <Modal id='modalid' 
        show={this.state.show}
        /> */}
      </div>
    );
  };     
};

export default CustomContainerTikiHawaiana;

