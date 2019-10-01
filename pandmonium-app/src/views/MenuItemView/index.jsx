import React, {Component} from 'react';
import IconMenu from '../../components/Menu/icon.json';
import DataMenu from '../../components/Menu/data.json';
import Food from '../../components/MainContainer/index';
import Sidebar from '../../components/sidebar/Sidebar';

class MenuItemView extends Component {
    state = {
        icon : IconMenu,
        data : DataMenu
    }
    render(){
        return(
            <section>
                <Sidebar/>
                <h1 className='title'></h1>
                <main className="container">
                    <div className="container-food">
                        <Food icons={this.state.icon} name={this.state.data} />
                    </div>
                </main>
            </section>
        )
    }
}

export default MenuItemView;