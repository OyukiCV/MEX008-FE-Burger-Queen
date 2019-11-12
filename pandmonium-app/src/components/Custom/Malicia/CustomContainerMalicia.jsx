import React, { Component } from 'react';
import IngredientsMalicia from './IngredientsMalicia';
import CustomPriceMalicia from './CustomPriceMalicia';
import '../style.scss';
import BtnCustomOrderMalicia from './BtnCustomOrderMalicia';

//LocalStorage
// import '../LocalStorage/LocalStorage';

class CustomContainerMalicia extends Component {
  // state = { show: false };

  // showModal = () => {
  //   this.setState({ show: true });
  // };


  // hideModal = () => {
  //   this.setState({ show: false });
  // }
 

  render(){
  
    return(
      <div className="customContainerPrincipalMalicia">
        <CustomPriceMalicia />
        <IngredientsMalicia />
        {/* <div className="buttonOrder">
          <button type='button' onClick={this.showModal}> Añadir Pedido </button>
        </div> */}
        <BtnCustomOrderMalicia />
        {/* <Modal id='modalid' 
        show={this.state.show}
        /> */}
      </div>
    );
  };     
};

export default CustomContainerMalicia;

