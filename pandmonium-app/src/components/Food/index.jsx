import React, {Component} from 'react';
import FoodItem  from '../FoodItem/index';

class Food extends Component {
    render(){
        return(
            this.props.name.map((element) =>
            <FoodItem item={element} icons={this.props.icons}/>)   
        );
}}
 /*const hamburgers = this.props.name.filter((element) => {
            return element.type === 'hamburgers'
        })
        return(
            hamburgers.map((element) =>
            <FoodItem item={element} icons={this.props.icons}/>)   
        ); */
export default Food

