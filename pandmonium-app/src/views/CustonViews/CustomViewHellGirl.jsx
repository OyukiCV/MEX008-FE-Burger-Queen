import React, { Component } from 'react';
import CustomContainerHellGirl from '../../components/Custom/HellGirl/CustomContainerHellGirl';
import Sidebar from '../../components/sidebar/Sidebar';
import DataMenu from '../../components/Menu/data.json';

class CustomViewHellGirl extends Component {
  state={
    data: DataMenu
  }

  render (){
    return(
      <div>
        <Sidebar />
        <CustomContainerHellGirl description={this.state.data} />
      </div>

    )
  }
}

export default CustomViewHellGirl;