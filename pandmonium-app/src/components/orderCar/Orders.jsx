import React,{Component} from 'react';
import imgArrow from '../../assets/img/arrow111 (1).png'
import imgTrash from '../../assets/img/trash.png'

class Orders extends Component{

    render(){
        return(
            <div>
            <h4>Pedidos</h4>
            <div  className = "orderContainer">
            <imput type = "text" />
            <figure>
                <button className= "btn-add">
                <img className = "img-add"src={imgArrow} alt="icono para desplegar"/>
                </button>
            </figure>
            <figure>
                <button className= "btn-add">
                <img className = "img-add"src={imgTrash} alt="icono para desplegar"/>
                </button>
            </figure>
            </div>
            </div>
        );
    }
}


export default Orders;