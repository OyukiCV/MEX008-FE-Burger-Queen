import React, { Component } from 'react';
import CustomContainerParaisoPerdido from '../../components/Custom/ParaisoPerdido/CustomContainerParaisoPerdido';
import Sidebar from '../../components/sidebar/Sidebar';
import DataMenu from '../../components/Menu/data.json';

class CustomViewParaisoPerdido extends Component {
  state={
    data: DataMenu
  }

  render (){
    return(
      <div>
        <Sidebar />
        <CustomContainerParaisoPerdido description={this.state.data} />
      </div>

    )
  }
}

export default CustomViewParaisoPerdido;