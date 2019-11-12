import React, { Component } from 'react';
import IngredientsLujuria from './IngredientsLujuria';
import CustomPriceLujuria from './CustomPriceLujuria';
import '../style.scss';
import BtnCustomOrderLujuria from './BtnCustomOrderLujuria';

//LocalStorage
// import '../LocalStorage/LocalStorage';

class CustomContainerLujuria extends Component {
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
        <CustomPriceLujuria />
        <IngredientsLujuria />
        {/* <div className="buttonOrder">
          <button type='button' onClick={this.showModal}> Añadir Pedido </button>
        </div> */}
        <BtnCustomOrderLujuria />
        {/* <Modal id='modalid' 
        show={this.state.show}
        /> */}
      </div>
    );
  };     
};

export default CustomContainerLujuria;

