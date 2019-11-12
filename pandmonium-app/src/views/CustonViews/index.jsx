import React, { Component } from 'react';
import CustomContainer from '../../components/Custom/Gula/CustomContainer';
import Sidebar from '../../components/sidebar/Sidebar';
import DataMenu from '../../components/Menu/data.json';

class CustomView extends Component {
  state={
    data: DataMenu
  }

  render (){
    return(
      <div>
        <Sidebar />,
        <CustomContainer description={this.state.data} />
      </div>

    )
  }
}

export default CustomView;