import React,{Component} from 'react';
import imgTrash from '../../assets/img/trash.png'

class Orders extends Component{

    render(){
        return(
            <div>
            <h4>Pedidos</h4>
            <div  className = "orderContainer">
            <div type = "text" className="order-list">  
            <p> Mesa: <br /> </p>  
            <table>
                <tr><th> {localStorage.getItem('No_mesa')} </th></tr>
                <tr> <th>{localStorage.getItem('gula')}  </th></tr>
                <tr> <th>{localStorage.getItem('extra')}</th></tr>
                <tr> <th>{localStorage.getItem('malicia')}</th>  </tr>
                <tr> <th>{localStorage.getItem('soberbia')} </th></tr>  
                <tr> <th>{localStorage.getItem('encarnacion')} </th></tr>     
                <tr> <th>{localStorage.getItem('bananalimbo')} </th></tr>   
                <tr> <th>{localStorage.getItem('encarnacion')} </th></tr> 
                <tr> <th>{localStorage.getItem('jochoslaw')} </th></tr>
                <tr> <th>{localStorage.getItem('xoloescuintle')} </th></tr>
                <tr> <th>{localStorage.getItem('pitbull')} </th></tr>  
                <tr> <th>{localStorage.getItem('hachiko')} </th></tr>
                <tr> <th>{localStorage.getItem('pastoraleman')} </th></tr>
                <tr> <th>{localStorage.getItem('delirium')} </th></tr>
                <tr> <th>{localStorage.getItem('paraisoperdido')} </th></tr>
                <tr> <th>{localStorage.getItem('chaneque')} </th></tr>
                <tr> <th>{localStorage.getItem('sodoma')} </th></tr>
                <tr> <th>{localStorage.getItem('lujuria')} </th></tr>
                <tr> <th>{localStorage.getItem('angelcaido')} </th></tr>
                <tr> <th>{localStorage.getItem('purgatorio')} </th></tr>
                <tr> <th>{localStorage.getItem('tikihawaiana')} </th></tr>
                <tr> <th>{localStorage.getItem('margarita')} </th></tr>
                <tr> <th>{localStorage.getItem('almaenpena')} </th></tr> 
                <tr> <th>{localStorage.getItem('mousse')} </th></tr>
                <tr> <th>{localStorage.getItem('vegatina')} </th></tr>
                <tr> <th>{localStorage.getItem('hellgirl')} </th></tr>
                <tr> <th>{localStorage.getItem('pan')} </th></tr>
                <tr> <th>{localStorage.getItem('malteada')} </th></tr>
                <tr> <th>{localStorage.getItem('soda')} </th></tr>
                
                 
             </table>

            </div>
            
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