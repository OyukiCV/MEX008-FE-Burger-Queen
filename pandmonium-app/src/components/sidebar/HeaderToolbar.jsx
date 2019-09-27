import React from 'react';
import './Style.scss';

const DrawerToggleButton = props => (
  <button className="toggle-button" onClick={props.click}> 
    <div className="toggle-button__line"/>
    <div className="toggle-button__line"/>
    <div className="toggle-button__line"/> 
  </button>
);

const header = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div> 
        <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
    </nav>
  </header>
);

export default header;