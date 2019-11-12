import React, {Component} from 'react';
import FoodItem  from '../FoodItem/index';

class Burger extends Component {
    render(){
        const hotdog = this.props.name.filter((element) => {
                   return element.type === 'hotdogs'
               })
        return(
        hotdog.map((element) =>
        <FoodItem item={element} icons={this.props.icons}/>)   
        ); 
        
}}

export default Burger

