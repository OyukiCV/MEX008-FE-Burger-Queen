import React, { Component } from 'react';
import CustomContainerSodoma from '../../components/Custom/Sodoma/CustomContainerSodoma';
import Sidebar from '../../components/sidebar/Sidebar';
import DataMenu from '../../components/Menu/data.json';

class CustomViewSodoma extends Component {
  state={
    data: DataMenu
  }

  render (){
    return(
      <div>
        <Sidebar />
        <CustomContainerSodoma description={this.state.data} />
      </div>

    )
  }
}

export default CustomViewSodoma;