import React, {Component} from 'react';
import FoodItem  from '../FoodItem/index';

class Burger extends Component {
    render(){
        const hamburgers = this.props.name.filter((element) => {
                   return element.type === 'hamburguesas'
               })
        return(
        hamburgers.map((element) =>
        <FoodItem item={element} icons={this.props.icons}/>)   
        ); 
        
}}

export default Burger

