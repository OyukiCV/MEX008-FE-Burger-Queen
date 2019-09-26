import React from 'react';

import Hotdogs from '../../components/generalMenu/menus/hotDogs/hotDogs';
import Toolbar from '../../components/sidebar/toolbar/Toolbar';


class HotdogsMenu extends React.Component {
    render (){
        return (
        <div>
            <Toolbar />
            <Hotdogs />
        </div>
        );
    
    }
}
    export default HotdogsMenu;