import React, { Component } from 'react';
import CustomContainerTikiHawaiana from '../../components/Custom/TikiHawaiana/CustomContainerTikiHawaiana';
import Sidebar from '../../components/sidebar/Sidebar';
import DataMenu from '../../components/Menu/data.json';

class CustomViewTikiHawaiana extends Component {
  state={
    data: DataMenu
  }

  render (){
    return(
      <div>
        <Sidebar />
        <CustomContainerTikiHawaiana description={this.state.data} />
      </div>

    )
  }
}

export default CustomViewTikiHawaiana;