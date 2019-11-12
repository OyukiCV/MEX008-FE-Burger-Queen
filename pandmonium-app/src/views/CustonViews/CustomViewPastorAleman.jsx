import React, { Component } from 'react';
import CustomContainerPastorAleman from '../../components/Custom/PastorAleman/CustomContainerPastorAleman';
import Sidebar from '../../components/sidebar/Sidebar';
import DataMenu from '../../components/Menu/data.json';

class CustomViewPastorAleman extends Component {
  state={
    data: DataMenu
  }

  render (){
    return(
      <div>
        <Sidebar />
        <CustomContainerPastorAleman description={this.state.data} />
      </div>

    )
  }
}

export default CustomViewPastorAleman;