import React, { Component } from 'react';
import IngredientsJochoslaw from './IngredientsJochoslaw';
import CustomPriceJochoslaw from './CustomPriceJochoslaw';
import '../style.scss';
import BtnCustomOrderJochoslaw from './BtnCustomOrderJochoslaw';

//LocalStorage
// import '../LocalStorage/LocalStorage';

class CustomContainerJochoslaw extends Component {
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
        <CustomPriceJochoslaw />
        <IngredientsJochoslaw />
        {/* <div className="buttonOrder">
          <button type='button' onClick={this.showModal}> Añadir Pedido </button>
        </div> */}
        <BtnCustomOrderJochoslaw />
        {/* <Modal id='modalid' 
        show={this.state.show}
        /> */}
      </div>
    );
  };     
};

export default CustomContainerJochoslaw;

