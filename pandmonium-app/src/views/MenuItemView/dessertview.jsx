import React, {Component} from 'react';
import IconMenu from '../../components/Menu/icon.json';
import DataMenu from '../../components/Menu/data.json';
import Dessert from '../../components/Food/dessert';
import Sidebar from '../../components/sidebar/Sidebar';

class DessertView extends Component {
    state = {
        icon : IconMenu,
        data : DataMenu
    }
    render(){
        return(
            <section>
                <Sidebar/>
                <h1 className='title'>Postres</h1>
                <main className="container">
                    <div className="container-food">
                        <Dessert icons={this.state.icon} name={this.state.data} />
                    </div>
                </main>
            </section>
        )
    }
}

export default DessertView;