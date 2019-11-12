import React, {Component} from 'react';
import IconMenu from '../../components/Menu/icon.json';
import Sidebar from '../../components/sidebar/Sidebar';
import Menu from '../../components/Menu/index';
import '../TableSelectorView/Style.css';
import Car from '../../components/BtnCar/BtnCar';

class MenuView extends Component {
    state = {
        icon : IconMenu,

    }
    render(){
        return(
            <section>
                <Sidebar/>
                <h1 className="title">Menu</h1>
                <Car />
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