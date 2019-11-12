import React from 'react';
import './modal.css';
// import { checkPropTypes } from 'prop-types';

const Modal = ({ show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return(
    <div className={showHideClassName}>
        <div className='answer'>¡Se agregó con éxito! √</div>
    </div>
  );
};


export default Modal;