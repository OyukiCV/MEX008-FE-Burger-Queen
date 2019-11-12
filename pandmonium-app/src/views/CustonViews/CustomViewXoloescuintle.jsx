import React, { Component } from 'react';
import CustomContainerXoloescuintle from '../../components/Custom/Xoloescuintle/CustomContainerXoloescuintle';
import Sidebar from '../../components/sidebar/Sidebar';
import DataMenu from '../../components/Menu/data.json';

class CustomViewXoloescuintle extends Component {
  state={
    data: DataMenu
  }

  render (){
    return(
      <div>
        <Sidebar />
        <CustomContainerXoloescuintle description={this.state.data} />
      </div>

    )
  }
}

export default CustomViewXoloescuintle;