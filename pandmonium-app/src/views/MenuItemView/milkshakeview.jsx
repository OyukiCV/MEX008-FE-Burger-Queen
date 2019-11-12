import React, {Component} from 'react';
import malteada from '../../assets/img/malteada.png';
import '../MenuItemView/style.scss'
import Sidebar from '../../components/sidebar/Sidebar';
import BtnCustomOrder from '../../components/Custom/Gula/BtnCustomOrder';



class CustomMilkshake extends Component {
    handleChecket = (e) => {
        console.log(e.target.value);
        const election = e.target.value;

        localStorage.setItem('malteada', JSON.stringify(election));
    }

    render(){
        return(
            <div>
            <Sidebar/>
            <div className="img-milkshake">
                <figure className='figure-milkshake'>
                    <img src={malteada} alt="#" />
                </figure>
                <div className="option-milkshake">
                    <div>
                        <label htmlFor="Mazapan" name="check">
                            Mazapan</label> 
                        <input
                            name="check"
                            id="mazapan"
                            type="radio"
                            value="Malteada Mazapan"
                            onChange={this.handleChecket}/>    
                    </div>
                    <div>
                        <label htmlFor="Fresa" name="check">
                            Fresa</label> 
                        <input
                            name="check"
                            id="fresa"
                            type="radio"
                            value="Malteada Fresa"
                            onChange={this.handleChecket}/>    
                    </div>
                    <div>
                        <label htmlFor="Chocomenta" name="check">Chocomenta</label>
                        <input
                             name="check"
                             id="chocomenta"
                             type="radio"
                             value="Malteada Chocomenta"
                             onChange={this.handleChecket}/>
                    </div>
                    
                </div>
            </div>

            <BtnCustomOrder />
            </div>
        )
    }
}

export default CustomMilkshake;