import React, { Component } from 'react';
import CustomContainerVegatina from '../../components/Custom/Vegatina/CustomContainerVegatina';
import Sidebar from '../../components/sidebar/Sidebar';
import DataMenu from '../../components/Menu/data.json';

class CustomViewVegatina extends Component {
  state={
    data: DataMenu
  }

  render (){
    return(
      <div>
        <Sidebar />
        <CustomContainerVegatina description={this.state.data} />
      </div>

    )
  }
}

export default CustomViewVegatina;