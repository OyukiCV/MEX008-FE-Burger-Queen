import React, { Component } from 'react';
import IngredientsMargarita from './IngredientsMargarita';
import CustomPriceMargarita from './CustomPriceMargarita';
import '../style.scss';
import BtnCustomOrderMargarita from './BtnCustomOrderMargarita';

//LocalStorage
// import '../LocalStorage/LocalStorage';

class CustomContainerMargarita extends Component {
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
        <CustomPriceMargarita />
        <IngredientsMargarita />
        {/* <div className="buttonOrder">
          <button type='button' onClick={this.showModal}> Añadir Pedido </button>
        </div> */}
        <BtnCustomOrderMargarita />
        {/* <Modal id='modalid' 
        show={this.state.show}
        /> */}
      </div>
    );
  };     
};

export default CustomContainerMargarita;

