import React, { Component } from 'react';
import IngredientsAngelCaido from './IngredientsAngelCaido';
import CustomPriceAngelCaido from './CustomPriceAngelCaido';
import '../style.scss';
import BtnCustomOrderAngelCaido from './BtnCustomOrderAngelCaido';

//LocalStorage
// import '../LocalStorage/LocalStorage';

class CustomContainerAngelCaido extends Component {
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
        <CustomPriceAngelCaido />
        <IngredientsAngelCaido />
        {/* <div className="buttonOrder">
          <button type='button' onClick={this.showModal}> Añadir Pedido </button>
        </div> */}
        <BtnCustomOrderAngelCaido />
        {/* <Modal id='modalid' 
        show={this.state.show}
        /> */}
      </div>
    );
  };     
};

export default CustomContainerAngelCaido;

