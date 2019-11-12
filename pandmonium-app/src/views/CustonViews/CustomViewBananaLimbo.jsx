import React, { Component } from 'react';
import CustomContainerBananaLimbo from '../../components/Custom/BananaLimbo/CustomContainerBananaLimbo';
import Sidebar from '../../components/sidebar/Sidebar';
import DataMenu from '../../components/Menu/data.json';

class CustomViewBananaLimbo extends Component {
  state={
    data: DataMenu
  }

  render (){
    return(
      <div>
        <Sidebar />
        <CustomContainerBananaLimbo description={this.state.data} />
      </div>

    )
  }
}

export default CustomViewBananaLimbo;