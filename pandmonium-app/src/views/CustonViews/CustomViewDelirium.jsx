import React, { Component } from 'react';
import CustomContainerDelirium from '../../components/Custom/Delirium/CustomContainerDelirium';
import Sidebar from '../../components/sidebar/Sidebar';
import DataMenu from '../../components/Menu/data.json';

class CustomViewDelirium extends Component {
  state={
    data: DataMenu
  }

  render (){
    return(
      <div>
        <Sidebar />
        <CustomContainerDelirium description={this.state.data} />
      </div>

    )
  }
}

export default CustomViewDelirium;