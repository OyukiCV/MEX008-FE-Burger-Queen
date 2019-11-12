import React, {Component} from 'react';
import FoodItem from '../FoodItem/index';


class Milkshake extends Component {
   render(){
       const milkshake = this.props.name.filter((element) => {
           return element.type === 'malteadas'
       })
       return(
           milkshake.map((element)=>
           <FoodItem item={element} icons={this.props.icons}/>)
       );
   }
}

export default Milkshake;



