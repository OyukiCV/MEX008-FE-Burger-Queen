import React from 'react';
import Pizzas from '../../components/generalMenu/menus/pizzas/Pizzas';
import Toolbar from '../../components/sidebar/toolbar/Toolbar';

class PizzasMenu extends React.Component {
    render(){
        return (
            <div>
                <Toolbar />
                <Pizzas />
            </div>
        );
    }
}

export default PizzasMenu;