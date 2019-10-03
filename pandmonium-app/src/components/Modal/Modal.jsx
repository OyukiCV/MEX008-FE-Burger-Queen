import React from 'react';
import './modal.css';
// import { checkPropTypes } from 'prop-types';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return(
    <div className={showHideClassName}>

        {/* <i class="fas fa-check-circle"></i> */}
        <div className='answer'>¡Se agregó con éxito! √</div>
    </div>
  );
};


export default Modal;