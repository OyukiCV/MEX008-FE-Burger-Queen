import React, { Component } from 'react';
import CustomContainerPurgatorio from '../../components/Custom/Purgatorio/CustomContainerPurgatorio';
import Sidebar from '../../components/sidebar/Sidebar';
import DataMenu from '../../components/Menu/data.json';

class CustomViewPurgatorio extends Component {
  state={
    data: DataMenu
  }

  render (){
    return(
      <div>
        <Sidebar />
        <CustomContainerPurgatorio description={this.state.data} />
      </div>

    )
  }
}

export default CustomViewPurgatorio;