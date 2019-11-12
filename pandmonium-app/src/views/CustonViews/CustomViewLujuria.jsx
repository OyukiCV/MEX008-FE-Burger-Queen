import React, { Component } from 'react';
import CustomContainerLujuria from '../../components/Custom/Lujuria/CustomContainerLujuria';
import Sidebar from '../../components/sidebar/Sidebar';
import DataMenu from '../../components/Menu/data.json';

class CustomViewLujuria extends Component {
  state={
    data: DataMenu
  }

  render (){
    return(
      <div>
        <Sidebar />
        <CustomContainerLujuria description={this.state.data} />
      </div>

    )
  }
}

export default CustomViewLujuria;