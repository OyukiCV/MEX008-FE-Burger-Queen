import React, {Component} from 'react';

// Home

import WhitRouter from './views/whitRouter'
import RouteJSON from './components/Menu/icon.json';
import Mesas from './views/TableSelectorView/index';
import Menu from './views/MenuItemView/index';
import Todos from './firebase/todos';

import Login from './views/Login/Login';
import OrderCarView from './views/OrderCarView/index';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';



//Component
class App extends Component {

    state = {
        routes : RouteJSON
    }
    render(){
        return(
            <Router basename={window.location.pathname || ''}>
                <Switch>
                    
                     <Route exact path={this.state.routes.route} component={WhitRouter} />
                
                   
                    <Route exact path='/menu' component={Menu} />
                    <Route exact path='/todos' component={Todos} />
                    <Route exact path='/' component={Login}/>
                    <Route exact path='/mesas' component={Mesas} />
                    <Route exact path='/carrito' component={OrderCarView} />


                </Switch>
            </Router>
        )
    };
}

export default App;

