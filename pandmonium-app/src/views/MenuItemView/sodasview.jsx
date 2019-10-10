import React, {Component} from 'react';
import soda from '../../assets/img/bebida.png';
import '../MenuItemView/style.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import BtnCustomOrder from '../../components/Custom/Gula/BtnCustomOrder';



class CustomSodas extends Component {
    handleChecket = (e) => {
        console.log(e.target.value);
        const election = e.target.value;

        localStorage.setItem('soda',JSON.stringify(election));
    }

    render(){
        return(
            <div>
                <Sidebar/>
                <div className = "img-milkshake">
                    <figure className = 'figure-milkshake'>
                        <img src={soda} alt="#"/>
                    </figure>
                    <div className = "option-milkshake">
                        <div>
                            <label htmlFor="Piña coco, Maracuyá, mango" name= "check">Piña coco</label>
                            <input 
                                name = "check"
                                id = "piña-coco"
                                type = "radio"
                                value = "Soda Piña coco"
                                onChange = {this.handleChecket}/>  
                        </div>
                        <div>
                            <label htmlFor="Maracuyá" name = "check">Maracuyá</label>
                            <input 
                                name = "check"
                                id = "maracuya"
                                type = "radio"
                                value = "Soda Maracuya"
                                onChange = {this.handleChecket}/>

                        </div>
                        <div>
                            <label htmlFor="Mango" name = "check">Mango</label>
                            <input 
                                name = "check"
                                id = "mango"
                                type = "radio"
                                value = "Soda Mango"
                                onChange = {this.handleChecket}/>
                        </div>

                    </div>

                </div>
                <BtnCustomOrder/>
            </div>
        )
    }
}

export default CustomSodas;
