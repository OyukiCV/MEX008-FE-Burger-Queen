import React,{Component} from 'react';
import './index.scss';


class PayOrder extends Component{

    render(){
        return(
            <div>
                <div className = "option-price">
                <h4>Pagar Orden</h4> 
                </div>
                <div className = "status-table">
                    <p className = "status-table">Ocupado</p>
                    <button className = "btn-status"></button>
                </div>
            
            </div>
        )
    }
}


export default PayOrder;