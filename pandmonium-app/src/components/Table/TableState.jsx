import React from 'react';
import './Style.scss';
import {Link} from 'react-router-dom';


class TableList extends React.Component{
   state ={
       changeColorGreen: true
   }
   
   changeColor = (x)=>{
    this.setState({changeColorGreen: !this.state.changeColorGreen})

    this.setState({ show: true });
       const id = x.target.id;

       localStorage.setItem('No_mesa', JSON.stringify(id) );
    
    //    this.setState({changeColorGreen: !this.state.changeColorGreen})
      
   }
   render(){
       if(this.state.changeColorGreen){
           return(
               <Link to='/Menu' >
               <button className='single-table'
               id={this.props.number} 
            // style={{backgroundColor: (this.state.changeColorGreen) ? '#C4C4C4' : "#42FF00"}}
            //    onClick={this.changeColor}
               style={{backgroundColor: (this.state.changeColorGreen) ? 'white' : "#42FF00"}}
              onClick={this.changeColor}
               >
              {this.props.number}
              </button>
              </Link>
           )
       }
       else{
           return(
               <button style={{backgroundColor: (this.state.changeColorGreen) ? '#C4C4C4' : "#42FF00"}} onClick={this.changeColor}>{this.props.number}
               </button>
           )
       }
    }
}
export default TableList;