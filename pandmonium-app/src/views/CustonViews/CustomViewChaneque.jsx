import React, { Component } from 'react';
import CustomContainerChaneque from '../../components/Custom/Chaneque/CustomContainerChaneque';
import Sidebar from '../../components/sidebar/Sidebar';
import DataMenu from '../../components/Menu/data.json';

class CustomViewChaneque extends Component {
  state={
    data: DataMenu
  }

  render (){
    return(
      <div>
        <Sidebar />
        <CustomContainerChaneque description={this.state.data} />
      </div>

    )
  }
}

export default CustomViewChaneque;