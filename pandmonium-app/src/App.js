import React, {Component} from 'react';

// Home

import WhitRouter from './views/whitRouter'
import RouteJSON from './components/Menu/icon.json';
import Tables from './views/TableSelectorView/index';
import Menu from './views/MenuItemView/index';
<<<<<<< HEAD
import Todos from './firebase/ToDo'

=======
import Login from './views/Login/Login';
>>>>>>> 2e74078493f996819db830bd4c126f96e6b0bdbb


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
<<<<<<< HEAD
                    <Route exact path='/' component={Todos} />
=======
                    
>>>>>>> 2e74078493f996819db830bd4c126f96e6b0bdbb
                     <Route exact path={this.state.routes.route} component={WhitRouter} />
                    {/*<Route exact path={this.state.routes.route} component={Prueba2}/>*/}
                   
                    <Route exact path='/menu' component={Menu} />
                    <Route exact path='/' component={Login}/>
                    <Route exact path='/tables' component={Tables} />


                </Switch>
            </Router>
        )
    };
}

export default App;

