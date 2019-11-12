import React, { Component } from 'react';
import CustomContainerSoberbia from '../../components/Custom/Soberbia/CustomContainerSoberbia';
import Sidebar from '../../components/sidebar/Sidebar';
import DataMenu from '../../components/Menu/data.json';

class CustomViewSoberbia extends Component {
  state={
    data: DataMenu
  }

  render (){
    return(
      <div>
        <Sidebar />
        <CustomContainerSoberbia description={this.state.data} />
      </div>

    )
  }
}

export default CustomViewSoberbia;