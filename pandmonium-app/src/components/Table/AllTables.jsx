import React from 'react';
/* import HelpButton from './helpButton/HelpButton' */
import TableList from './TableState';
import './Style.scss';

function AllTables(){
    return(
        <div className = "allTables">
        <div className = "tablesOrder">
            <TableList number ="3"/>
            <TableList number ="4"/>
       </div>
        <div className = "tablesOrder">
            <TableList number = "6"/>
            <TableList number = "7"/>
            <TableList number = "8"/>
            <TableList number = "9"/>
            <TableList number = "10"/>
         </div>
         <div className = "tablesOrder">
            <TableList number = "1"/>
            <TableList number = "2"/>
       </div>
       <div className = "tablesOrder">
            <TableList number ="5"/>
       </div>
       <div className = "tablesOrder">
            <TableList number = "11"/>
            <TableList number = "12"/>
            <TableList number = "13"/>
            <TableList number = "14"/>
           </div>
           </div>
    )
}
export default AllTables;