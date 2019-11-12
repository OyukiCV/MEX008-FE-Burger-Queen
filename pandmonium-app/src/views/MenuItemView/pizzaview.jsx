import React, {Component} from 'react';
import IconMenu from '../../components/Menu/icon.json';
import DataMenu from '../../components/Menu/data.json';
import Pizza from '../../components/Food/pizza';
import Sidebar from '../../components/sidebar/Sidebar';

class PizzaView extends Component {
    state = {
        icon : IconMenu,
        data : DataMenu
    }
    render(){
        return(
            <section>
                <Sidebar/>
                <h1 className='title'>Pizzas</h1>
                <main className="container">
                    <div className="container-food">
                        <Pizza icons={this.state.icon} name={this.state.data} />
                    </div>
                </main>
            </section>
        )
    }
}

export default PizzaView;