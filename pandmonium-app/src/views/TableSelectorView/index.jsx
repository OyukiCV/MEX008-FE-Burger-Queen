import React from 'react';
import AllTables from '../../components/Table/AllTables';
import Sidebar from '../../components/sidebar/Sidebar';
import './Style.css';



class selectTables extends React.Component {
render (){
    return (
    <section>
        <Sidebar />
        <div className='container-white'>
        <div  className='tables-container'>
        <h1 className="title">Mesas</h1>
        <p>Selecciona la mesa que estás atendiendo</p>
        </div>
        <AllTables />
        </div>
    </section>
    );

}
}
export default selectTables;