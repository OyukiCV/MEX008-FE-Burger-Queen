import React, { Component } from 'react';
import CustomContainerHachiko from '../../components/Custom/Hachiko/CustomContainerHachiko';
import Sidebar from '../../components/sidebar/Sidebar';
import DataMenu from '../../components/Menu/data.json';

class CustomViewHachiko extends Component {
  state={
    data: DataMenu
  }

  render (){
    return(
      <div>
        <Sidebar />
        <CustomContainerHachiko description={this.state.data} />
      </div>

    )
  }
}

export default CustomViewHachiko;