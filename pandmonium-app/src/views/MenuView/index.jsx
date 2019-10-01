import React, {Component} from 'react';
import IconMenu from '../../components/Menu/icon.json';
import Data from '../../components/Menu/data.json';
import Sidebar from '../../components/sidebar/Sidebar';
import Menu from '../../components/Menu/index';
import '../TableSelectorView/Style.css';

class MenuView extends Component {
    state = {
        icon : IconMenu,

    }
    render(){
        return(
            <section>
                <Sidebar/>
                <h1 className="title">Menu</h1>
                <main className="container">
                    <div className="container-food">
                        <Menu icons={this.state.icon}/>
                    </div>
                </main>
            </section>
        );
    }
}

export default MenuView;