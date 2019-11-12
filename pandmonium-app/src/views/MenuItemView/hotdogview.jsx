import React, {Component} from 'react';
import IconMenu from '../../components/Menu/icon.json';
import DataMenu from '../../components/Menu/data.json';
import Hotdog from '../../components/Food/hotdog';
import Sidebar from '../../components/sidebar/Sidebar';

class HotdogView extends Component {
    state = {
        icon : IconMenu,
        data : DataMenu
    }
    render(){
        return(
            <section>
                <Sidebar/>
                <h1 className='title'>Hotdog</h1>
                <main className="container">
                    <div className="container-food">
                        <Hotdog icons={this.state.icon} name={this.state.data} />
                    </div>
                </main>
            </section>
        )
    }
}

export default HotdogView;