import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import './style.css';

class Error extends React.Component {
    render (){
    return (
        <section>
            <Sidebar/>
            <div id="error404">
            </div>
        </section>
    );
    }
}

export default Error;