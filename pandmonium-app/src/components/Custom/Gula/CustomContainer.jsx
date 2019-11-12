import React, { Component } from 'react';
import Ingredients from './Ingredients';
import CustomPrice from './CustomPrice';
import '../style.scss';
// import Modal from '../Modal/Modal';
import BtnCustomOrder from './BtnCustomOrder';

//LocalStorage
import '../../LocalStorage/LocalStorage';

class CustomContainer extends Component {
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
        <CustomPrice 
        />
        <Ingredients 
        />
        <br></br>
        {/* <div className="buttonOrder">
          <button type='button' onClick={this.showModal}> Añadir Pedido </button>
        </div> */}
        <BtnCustomOrder />
        {/* <Modal id='modalid' 
        show={this.state.show}
        /> */}
      </div>
    );
  };     
};

export default CustomContainer;

