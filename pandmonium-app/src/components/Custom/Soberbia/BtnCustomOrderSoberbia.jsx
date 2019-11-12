import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Modal from '../../Modal/Modal';
import '../style.scss';


class BtnCustomOrderSoberbia extends Component {
  state = { 
    show: false
  };

  showModal = () => {
    this.setState({ show: true });
  };

  // hideModal = () => {
  //   this.setState({ show: false });
  // }
 
  render() {
    return(
      <div>
        <div className="buttonOrderMalicia">
        <Link to={{pathname: './Menu'}}>
         <button className="buttonOrder" onClick={this.showModal} > Añadir Pedido </button>
        </Link>
        </div>
        <Modal id='modalid' 
        show={this.state.show}
        />
      </div>
    )
  }
}

export default BtnCustomOrderSoberbia;

