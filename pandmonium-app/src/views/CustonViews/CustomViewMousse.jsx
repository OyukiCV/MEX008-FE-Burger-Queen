import React, { Component } from 'react';
import CustomContainerMousse from '../../components/Custom/Mousse/CustomContainerMousse';
import Sidebar from '../../components/sidebar/Sidebar';
import DataMenu from '../../components/Menu/data.json';

class CustomViewMousse extends Component {
  state={
    data: DataMenu
  }

  render (){
    return(
      <div>
        <Sidebar />
        <CustomContainerMousse description={this.state.data} />
      </div>

    )
  }
}

export default CustomViewMousse;