import React, {Component} from 'react';
import IconMenu from '../../components/Menu/icon.json';
import DataMenu from '../../components/Menu/data.json';
import Burger from '../../components/Food/burger';
import Sidebar from '../../components/sidebar/Sidebar';

class BurgerView extends Component {
    state = {
        icon : IconMenu,
        data : DataMenu
    }
    render(){
        return(
            <section>
                <Sidebar/>
                <h1 className='title'>Hamburguesas</h1>
                <main className="container">
                    <div className="container-food">
                        <Burger icons={this.state.icon} name={this.state.data} />
                    </div>
                </main>
            </section>
        )
    }
}

export default BurgerView;