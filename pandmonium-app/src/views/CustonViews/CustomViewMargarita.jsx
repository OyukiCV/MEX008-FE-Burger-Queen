import React, { Component } from 'react';
import CustomContainerMargarita from '../../components/Custom/Margarita/CustomContainerMargarita';
import Sidebar from '../../components/sidebar/Sidebar';
import DataMenu from '../../components/Menu/data.json';

class CustomViewMargarita extends Component {
  state={
    data: DataMenu
  }

  render (){
    return(
      <div>
        <Sidebar />
        <CustomContainerMargarita description={this.state.data} />
      </div>

    )
  }
}

export default CustomViewMargarita;