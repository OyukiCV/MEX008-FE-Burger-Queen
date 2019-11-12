import React, { Component } from 'react';
import CustomContainerJochoslaw from '../../components/Custom/Jochoslaw/CustomContainerJochoslaw';
import Sidebar from '../../components/sidebar/Sidebar';
import DataMenu from '../../components/Menu/data.json';

class CustomViewJochoslaw extends Component {
  state={
    data: DataMenu
  }

  render (){
    return(
      <div>
        <Sidebar />
        <CustomContainerJochoslaw description={this.state.data} />
      </div>

    )
  }
}

export default CustomViewJochoslaw;