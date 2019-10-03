import React from 'react';
import TextField from '@material-ui/core/TextField';

const inputMail = ({value, onChange}) => {

  return(
    <TextField 
      type='email'
      id='email'
      name='email'
      autoComplete='email'
      margin='normal'
      variant='outlined'
      placeholder='Correo Electrónico'
      className='mail-input'
      value={value}
      onChange={onChange}
    />
  )
}

export default inputMail;