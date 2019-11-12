import React, { Component } from 'react';
import IngredientsHellGirl from './IngredientsHellGirl';
import CustomPriceHellGirl from './CustomPriceHellGirl';
import '../style.scss';
import BtnCustomOrderHellGirl from './BtnCustomOrderHellGirl';

//LocalStorage
// import '../LocalStorage/LocalStorage';

class CustomContainerHellGirl extends Component {
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
        <CustomPriceHellGirl />
        <IngredientsHellGirl />
        {/* <div className="buttonOrder">
          <button type='button' onClick={this.showModal}> Añadir Pedido </button>
        </div> */}
        <BtnCustomOrderHellGirl />
        {/* <Modal id='modalid' 
        show={this.state.show}
        /> */}
      </div>
    );
  };     
};

export default CustomContainerHellGirl;

