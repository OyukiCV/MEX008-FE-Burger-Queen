import React, { Component } from 'react';
import CustomContainerEncarnacion from '../../components/Custom/Encarnacion/CustomContainerEncarnacion';
import Sidebar from '../../components/sidebar/Sidebar';
import DataMenu from '../../components/Menu/data.json';

class CustomViewEncarnacion extends Component {
  state={
    data: DataMenu
  }

  render (){
    return(
      <div>
        <Sidebar />
        <CustomContainerEncarnacion description={this.state.data} />
      </div>

    )
  }
}

export default CustomViewEncarnacion;