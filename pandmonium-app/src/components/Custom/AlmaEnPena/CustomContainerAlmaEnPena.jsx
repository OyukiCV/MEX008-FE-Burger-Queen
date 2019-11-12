import React, { Component } from 'react';
import IngredientsAlmaEnPena from './IngredientsAlmaEnPena';
import CustomPriceAlmaEnPena from './CustomPriceAlmaEnPena';
import '../style.scss';
import BtnCustomOrderAlmaEnPena from './BtnCustomOrderAlmaEnPena';

//LocalStorage
// import '../LocalStorage/LocalStorage';

class CustomContainerAlmaEnPena extends Component {
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
        <CustomPriceAlmaEnPena />
        <IngredientsAlmaEnPena />
        {/* <div className="buttonOrder">
          <button type='button' onClick={this.showModal}> Añadir Pedido </button>
        </div> */}
        <BtnCustomOrderAlmaEnPena />
        {/* <Modal id='modalid' 
        show={this.state.show}
        /> */}
      </div>
    );
  };     
};

export default CustomContainerAlmaEnPena;

