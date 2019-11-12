import React, {Component} from 'react';
import FoodItem  from '../FoodItem/index';

class Dessert extends Component {
    render(){
        const dessert = this.props.name.filter((element) => {
                   return element.type === 'postres'
               })
        return(
        dessert.map((element) =>
        <FoodItem item={element} icons={this.props.icons}/>)   
        ); 
        
}}

export default Dessert

