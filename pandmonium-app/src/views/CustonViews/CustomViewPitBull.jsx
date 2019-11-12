import React, { Component } from 'react';
import CustomContainerPitBull from '../../components/Custom/PitBull/CustomContainerPitBull';
import Sidebar from '../../components/sidebar/Sidebar';
import DataMenu from '../../components/Menu/data.json';

class CustomViewPitBull extends Component {
  state={
    data: DataMenu
  }

  render (){
    return(
      <div>
        <Sidebar />
        <CustomContainerPitBull description={this.state.data} />
      </div>

    )
  }
}

export default CustomViewPitBull;