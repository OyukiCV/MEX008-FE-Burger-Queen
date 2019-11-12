import React, { Component } from 'react';
import IngredientsChaneque from './IngredientsChaneque';
import CustomPriceChaneque from './CustomPriceChaneque';
import '../style.scss';
import BtnCustomOrderChaneque from './BtnCustomOrderChaneque';

//LocalStorage
// import '../LocalStorage/LocalStorage';

class CustomContainerChaneque extends Component {
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
        <CustomPriceChaneque />
        <IngredientsChaneque />
        {/* <div className="buttonOrder">
          <button type='button' onClick={this.showModal}> Añadir Pedido </button>
        </div> */}
        <BtnCustomOrderChaneque />
        {/* <Modal id='modalid' 
        show={this.state.show}
        /> */}
      </div>
    );
  };     
};

export default CustomContainerChaneque;

