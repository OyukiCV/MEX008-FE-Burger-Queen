import React, {Component} from 'react';
import FoodItem  from '../FoodItem/index';

class Pizza extends Component {
    render(){
        const pizza = this.props.name.filter((element) => {
                   return element.type === 'pizzas'
               })
        return(
        pizza.map((element) =>
        <FoodItem item={element} icons={this.props.icons}/>)   
        ); 
        
}}

export default Pizza

