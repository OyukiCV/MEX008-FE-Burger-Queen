import React, {Component} from 'react';
import IconMenu from '../../components/Menu/icon.json';
import Sidebar from '../../components/sidebar/Sidebar';
import Menu from '../../components/Menu/index';
console.log(IconMenu);

class MenuView extends Component {
    state = {
        icon : IconMenu
    }
    render(){
        return(
            <section>
            <Sidebar/>
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