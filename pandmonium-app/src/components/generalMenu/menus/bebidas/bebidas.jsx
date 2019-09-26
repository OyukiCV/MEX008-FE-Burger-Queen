import React from 'react';
import '../../../../views/extras.scss';

function Drink(props){
    return(
        <button className='button-extra'>{props.name}</button>
    );
}

class Drinks extends React.Component {
    render(){
        return (
            <div className="extras">
                <p class="title">Bebidas</p>
                <Drink name="Malteadas"/>
                <Drink name="Sodas italianas"/>
            </div>
        );
    }
}

export default Drinks;