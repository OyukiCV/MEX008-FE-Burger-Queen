import React, { Component } from 'react';
import IngredientsParaisoPerdido from './IngredientsParaisoPerdido';
import CustomPriceParaisoPerdido from './CustomPriceParaisoPerdido';
import '../style.scss';
import BtnCustomOrderParaisoPerdido from './BtnCustomOrderParaisoPerdido';

//LocalStorage
// import '../LocalStorage/LocalStorage';

class CustomContainerParaisoPerdido extends Component {
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
        <CustomPriceParaisoPerdido />
        <IngredientsParaisoPerdido />
        {/* <div className="buttonOrder">
          <button type='button' onClick={this.showModal}> Añadir Pedido </button>
        </div> */}
        <BtnCustomOrderParaisoPerdido />
        {/* <Modal id='modalid' 
        show={this.state.show}
        /> */}
      </div>
    );
  };     
};

export default CustomContainerParaisoPerdido;

