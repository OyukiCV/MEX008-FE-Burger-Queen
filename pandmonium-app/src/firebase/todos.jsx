import React, { Component } from 'react'
import db from './FirestoreConfig';
//import { updateExpression } from '@babel/types';

export default class Todos extends Component {

state ={
    items:[],
    inputValue:'',
 //para saber lo que estamos editando, inicialmente es falso porque no iniciamos editando algo. El id del documento editado se guarda.  
    edit:false,
    id:'',
    fadeIn:false,
    message:'',
}
//Toma la variable de configuración de Firebase e itera sobre la colección creada(snapShots) 
    componentDidMount(){
         db.collection('Mesas-P').onSnapshot((snapShots) => {
               this.setState({
                   items:snapShots.docs.map(doc => {
                       return{id:doc.id,data:doc.data()}
                   })
               })
       
         })
    }


//Cuando haya un cambio en el input va a llamar a esta función, que toma el evento y setea el valor con el valor del input
    changeValue=(e)=> {
        this.setState({
            inputValue:e.target.value
        })
    };
//función para agregar directamente a la base de datos. En caso de que sea falso vamos a agregar, si es true se llama a una función (update) que va a actualizar.
    action =() => {
        const {inputValue, edit} = this.state;
        !edit?
        db.collection("Mesas-P").add({
            item: inputValue
        }).then( () => {
            this.message('Agregado')
        }).catch ( (e)=> {
            this.message('Error'+e)
        }): 
        this.update();
    }

 //Función para pasar el id. En la variable se llama a la colección y posteriormente a la variable doc para verificar si el documento existe, se realiza un seteo en el estado. En ese estado se encuentra el valor del input. Editar es true y el id es igual al que tenemos en el documento.
 getTodo = (id) => {
     let docRef = db.collection("Mesas-P").doc(id);

     docRef.get().then((doc)=> {
         if(doc.exists) {
             this.setState({
                 inputValue: doc.data().item,
                 edit:true,
                 id:doc.id
             })
         }else {
             console.log('El documento no existe')
         }
     }).catch((error)=>{
         console.log(error);
     })
 };

 //Declarando la variable update para actualizar (el valor item va a cambiar por el del inputValue)
 update =() =>{
     const {id,inputValue} = this.state
     db.collection("Mesas-P").doc(id).update({
         item: inputValue
     }).then(()=>{
         this.message('Actualizado')
         this.setState({
             edit:false
         })
     }).catch((error)=>{
         this.message('Error')
     })
 };

 //Función para el botón Eliminar
 deleteItem = (id)=>{
    db.collection("Mesas-P").doc(id).delete();
 }

//Función para el mensaje que recibirá el usuario de que se ha agregado algo
message =(message)=>{
    this.setState({
        inputValue:'',
        fadeIn: true,
        message: message
    });
//Función para ocultar el mensaje después de 3 segundos
    setTimeout(()=>{
        this.setState({
            fadeIn:false,
            message:''
        })
    }, 3000);
    
}

 //El operador ternario sirve para el botón Editar, para que el input cambie su valor
    render() {
        const {items,inputValue} = this.state;
        return (
            <div>
              <div>
                  <div>
                    <fieldset>
                    <input
                    placeholder="Agregar nuevo item" 
                    value={inputValue}
                    onChange={this.changeValue}
                    />
                    </fieldset>  
                  </div>
                  <div>
                      <div className="text-right">
                         <button color="info" onClick={this.action}>
                          {this.state.edit ? 'Editar': 'Agregar'}
                         </button>

                      </div>

                  </div>
                  </div> 
                  <span in={this.state.fadeIn}tag="h6"className="mt-3 text-center text-sucess">
                      {this.state.message}
                  </span>
                <table hover className="text-center">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items && items !== undefined ? items.map((item,key) => {
                            return <tr key={key}>
                                <td>{item.data.item}</td>
                                <td><button color="warning" onClick={() =>this.getTodo(item.id)}>Editar</button></td>
                                <td><button color="danger" onClick={()=>this.deleteItem(item.id)}>Eliminar</button></td>
                            </tr>
                        }):null}
                    </tbody>
                </table>
            </div>
        )
    }
}