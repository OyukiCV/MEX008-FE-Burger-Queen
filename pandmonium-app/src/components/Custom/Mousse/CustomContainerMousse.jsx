import React, { Component } from 'react';
import IngredientsMousse from './IngredientsMousse';
import CustomPriceMousse from './CustomPriceMousse';
import '../style.scss';
import BtnCustomOrderMousse from './BtnCustomOrderMousse';

//LocalStorage
// import '../LocalStorage/LocalStorage';

class CustomContainerMousse extends Component {
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
        <CustomPriceMousse />
        <IngredientsMousse />
        {/* <div className="buttonOrder">
          <button type='button' onClick={this.showModal}> Añadir Pedido </button>
        </div> */}
        <BtnCustomOrderMousse />
        {/* <Modal id='modalid' 
        show={this.state.show}
        /> */}
      </div>
    );
  };     
};

export default CustomContainerMousse;

