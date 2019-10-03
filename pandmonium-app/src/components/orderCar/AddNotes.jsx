import React,{Component} from 'react';
import './index.scss';
import ImgAgregar from '../../assets/img/imgAgregar.png'


class AddNotes extends Component{
    
    render(){
        return(
            <div>
            <h5>Añadir Notas extras</h5>
            <figure>
                <button className = "btn-add"> <img className = "img-add" src={ImgAgregar} alt="icono para agregar notas"/> </button>
            </figure>
            </div>
            
        )
    }
}



export default AddNotes;