import React from 'react';
import TextField from '@material-ui/core/TextField';

const inputPassword = ({value, onChange}) => {

  return(
    <TextField 
      type='password'
      id='password'
      name='password'
      placeholder='Contraseña'
      autoComplete='current-password'
      margin='normal'
      variant='outlined'
      className='password-input'
      value={value}
      onChange={onChange}
    />
  )
}

export default inputPassword;