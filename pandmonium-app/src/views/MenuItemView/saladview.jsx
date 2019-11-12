import React, {Component} from 'react';
import IconMenu from '../../components/Menu/icon.json';
import DataMenu from '../../components/Menu/data.json';
import Salad from '../../components/Food/salad';
import Sidebar from '../../components/sidebar/Sidebar';

class SaladView extends Component {
    state = {
        icon : IconMenu,
        data : DataMenu
    }
    render(){
        return(
            <section>
                <Sidebar/>
                <h1 className='title'>Ensaladas</h1>
                <main className="container">
                    <div className="container-food">
                        <Salad icons={this.state.icon} name={this.state.data} />
                    </div>
                </main>
            </section>
        )
    }
}

export default SaladView;