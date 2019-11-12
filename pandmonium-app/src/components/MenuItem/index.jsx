import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './styles.css';


class MenuItem extends Component {
    render(){
        const component = this.props.item.component;
             
        const src = (process.env.REACT_APP_PATH_IMAGES ? process.env.REACT_APP_PATH_IMAGES: '/MEX008-FE-Burger-Queen')+ (this.props.item  && this.props.item.icon);
        return(
            <Link to={{pathname: this.props.item.route, state: {component}}}>
                <button className="cuadro" key={this.props.item.id}>
                    <img className="iconFood" src={src} alt={this.props.item.id}/>{this.props.item.id}</button>
            </Link>
        );
    }
}


export default MenuItem;