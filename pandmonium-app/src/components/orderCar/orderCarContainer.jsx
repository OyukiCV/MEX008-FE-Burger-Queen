import React,{Component} from 'react';
import Sidebar from '../sidebar/Sidebar'
import PayOrder from '../orderCar/payOrder';
import Orders from '../orderCar/Orders';
import AddNotes from '../orderCar/AddNotes';
import './index.scss';


class OrderCarContainer extends Component{
    render(){
        return(
        <div className = "orderCarContainer">
            <Sidebar/>
            <PayOrder/>
            <Orders/> 
            <AddNotes/> 
            <div className = "btnsOrderCar">
                <button className = "btnOrderCar">Mandar a cocina</button>
                <button className = "btnOrderCar">Pagar</button>
            </div>
            </div>
            )
        }
    }
    
    export default OrderCarContainer;