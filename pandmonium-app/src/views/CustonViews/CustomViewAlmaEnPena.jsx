import React, { Component } from 'react';
import CustomContainerAlmaEnPena from '../../components/Custom/AlmaEnPena/CustomContainerAlmaEnPena';
import Sidebar from '../../components/sidebar/Sidebar';
import DataMenu from '../../components/Menu/data.json';

class CustomViewAlmaEnPena extends Component {
  state={
    data: DataMenu
  }

  render (){
    return(
      <div>
        <Sidebar />
        <CustomContainerAlmaEnPena description={this.state.data} />
      </div>

    )
  }
}

export default CustomViewAlmaEnPena;