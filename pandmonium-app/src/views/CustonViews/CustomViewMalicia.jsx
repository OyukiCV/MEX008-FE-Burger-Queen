import React, { Component } from 'react';
import CustomContainerMalicia from '../../components/Custom/Malicia/CustomContainerMalicia';
import Sidebar from '../../components/sidebar/Sidebar';
import DataMenu from '../../components/Menu/data.json';

class CustomViewMalicia extends Component {
  state={
    data: DataMenu
  }

  render (){
    return(
      <div>
        <Sidebar />
        <CustomContainerMalicia description={this.state.data} />
      </div>

    )
  }
}

export default CustomViewMalicia;