import React, { Component } from 'react';
import IngredientsPastorAleman from './IngredientsPastorAleman';
import CustomPricePastorAleman from './CustomPricePastorAleman';
import '../style.scss';
import BtnCustomOrderPastorAleman from './BtnCustomOrderPastorAleman';

//LocalStorage
// import '../LocalStorage/LocalStorage';

class CustomContainerPastorAleman extends Component {
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
        <CustomPricePastorAleman />
        <IngredientsPastorAleman />
        {/* <div className="buttonOrder">
          <button type='button' onClick={this.showModal}> Añadir Pedido </button>
        </div> */}
        <BtnCustomOrderPastorAleman />
        {/* <Modal id='modalid' 
        show={this.state.show}
        /> */}
      </div>
    );
  };     
};

export default CustomContainerPastorAleman;

