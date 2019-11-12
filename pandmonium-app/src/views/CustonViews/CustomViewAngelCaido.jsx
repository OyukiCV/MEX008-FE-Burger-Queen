import React, { Component } from 'react';
import CustomContainerAngelCaido from '../../components/Custom/AngelCaido/CustomContainerAngelCaido';
import Sidebar from '../../components/sidebar/Sidebar';
import DataMenu from '../../components/Menu/data.json';

class CustomViewAngelCaido extends Component {
  state={
    data: DataMenu
  }

  render (){
    return(
      <div>
        <Sidebar />
        <CustomContainerAngelCaido description={this.state.data} />
      </div>

    )
  }
}

export default CustomViewAngelCaido;