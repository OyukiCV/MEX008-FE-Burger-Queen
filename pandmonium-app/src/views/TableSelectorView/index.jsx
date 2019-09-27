import React from 'react';
import AllTables from '../../components/Table/AllTables';
import Sidebar from '../../components/sidebar/Sidebar';
import './Style.css';



class selectTables extends React.Component {
render (){
    return (
    <section>
        <Sidebar />
        <h1 className="title">Mesas</h1>
        <AllTables />
    </section>
    );

}
}
export default selectTables;