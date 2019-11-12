import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Style.scss';
import HeaderToolbar from './HeaderToolbar.jsx'


const SideDrawer = props => {
  let drawerClasses = ['side-drawer'];
  if(props.show){
    drawerClasses = ['side-drawer open'];
  }
  return (
    <nav className={drawerClasses.join('')}>
       <ul>
         <li><Link to={'/mesas'}>Mesas</Link></li>
         <li><Link to={'/HistorialDePago'}>Historial de Pago</Link></li>
         <li><Link to={'/carrito'}>Ordenes</Link></li>
       </ul>
     </nav>
    );
};


const Backdrop = props => (
  <div className="backdrop" onClick = {props.click}/>
);


class toolbar extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
     this.setState((prevState) => {
       return{sideDrawerOpen: !prevState.sideDrawerOpen}
     });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };
    render() {
      let backdrop;
      if(this.state.sideDrawerOpen){
        backdrop = <Backdrop click={this.backdropClickHandler}/>;
      }
      return (
        <div style={{height: '100%'}}>
        <HeaderToolbar  drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        </div>  
      )
    }
  }


export default toolbar;




