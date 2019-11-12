import React, {Component} from 'react';
import FoodItem from '../FoodItem/index'


class Sodas extends Component {
    render(){
        const sodas = this.props.name.filter((element) => {
            return element.type === 'malteadas'
        })
        return(
            sodas.map((element) => 
            <FoodItem item {element} icons = {this.props.icons}/>)
        );
    }
}


export default Sodas;