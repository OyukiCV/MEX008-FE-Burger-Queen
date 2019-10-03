import React, { Component } from 'react';
import Ingredients from './Ingredients';
import CustomPrice from './CustomPrice';
import './style.scss';
import Modal from '../Modal/Modal';

class CustomContainer extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };


  hideModal = () => {
    this.setState({ show: false });
  }
 

  render(){
    return(
      <div className="customContainerPrincipal">
        <CustomPrice />
        <Ingredients />,
        <div className="buttonOrder">
          <button type='button' onClick={this.showModal}> Añadir Pedido </button>
        </div>
        <Modal id='modalid' 
        show={this.state.show}
        // close={this.closeModalHandler}
        />

      </div>
    );
  };     
};

export default CustomContainer;