import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './styles.css'


class MenuNames extends Component {
    render(){
        const component = this.props.item.component;
        return(
            <Link to={{pathname: this.props.item.route, state: {component}}}><button className="cuadro" key={this.props.item.id}><img className="iconFood" src={this.props.item.icon} alt={this.props.item.id}/>{this.props.item.id}</button></Link>
        );
    }
}


export default MenuNames;