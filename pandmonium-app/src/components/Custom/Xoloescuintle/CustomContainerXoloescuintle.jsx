import React, { Component } from 'react';
import IngredientsXoloescuintle from './IngredientsXoloescuintle';
import CustomPriceXoloescuintle from './CustomPriceXoloescuintle';
import '../style.scss';
import BtnCustomOrderXoloescuintle from './BtnCustomOrderXoloescuintle';

//LocalStorage
// import '../LocalStorage/LocalStorage';

class CustomContainerXoloescuintle extends Component {
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
        <CustomPriceXoloescuintle />
        <IngredientsXoloescuintle />
        {/* <div className="buttonOrder">
          <button type='button' onClick={this.showModal}> Añadir Pedido </button>
        </div> */}
        <BtnCustomOrderXoloescuintle />
        {/* <Modal id='modalid' 
        show={this.state.show}
        /> */}
      </div>
    );
  };     
};

export default CustomContainerXoloescuintle;

