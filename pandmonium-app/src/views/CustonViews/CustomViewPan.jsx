import React, { Component } from 'react';
import CustomContainerPan from '../../components/Custom/Pan/CustomContainerPan';
import Sidebar from '../../components/sidebar/Sidebar';
import DataMenu from '../../components/Menu/data.json';

class CustomViewPan extends Component {
  state={
    data: DataMenu
  }

  render (){
    return(
      <div>
        <Sidebar />
        <CustomContainerPan description={this.state.data} />
      </div>

    )
  }
}

export default CustomViewPan;