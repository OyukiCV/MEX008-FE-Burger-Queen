import React, { Component } from 'react';
import IngredientsHachiko from './IngredientsHachiko';
import CustomPriceHachiko from './CustomPriceHachiko';
import '../style.scss';
import BtnCustomOrderHachiko from './BtnCustomOrderHachiko';

//LocalStorage
// import '../LocalStorage/LocalStorage';

class CustomContainerHachiko extends Component {
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
        <CustomPriceHachiko />
        <IngredientsHachiko />
        {/* <div className="buttonOrder">
          <button type='button' onClick={this.showModal}> Añadir Pedido </button>
        </div> */}
        <BtnCustomOrderHachiko />
        {/* <Modal id='modalid' 
        show={this.state.show}
        /> */}
      </div>
    );
  };     
};

export default CustomContainerHachiko;

