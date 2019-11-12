import React, { Component } from 'react';
import IngredientsEncarnacion from './IngredientsEncarnacion';
import CustomPriceEncarnacion from './CustomPriceEncarnacion';
import '../style.scss';
import BtnCustomOrderEncarnacion from './BtnCustomOrderEncarnacion';

//LocalStorage
// import '../LocalStorage/LocalStorage';

class CustomContainerEncarnacion extends Component {
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
        <CustomPriceEncarnacion />
        <IngredientsEncarnacion />
        <BtnCustomOrderEncarnacion />
      </div>
    );
  };     
};

export default CustomContainerEncarnacion;

