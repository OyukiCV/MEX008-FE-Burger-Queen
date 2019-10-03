import React, {Component} from 'react';
import FoodItem  from '../FoodItem/index';

class Salad extends Component {
    render(){
        const salad = this.props.name.filter((element) => {
                   return element.type === 'ensaladas'
               })
        return(
        salad.map((element) =>
        <FoodItem item={element} icons={this.props.icons}/>)   
        ); 
        
}}

export default Salad;

