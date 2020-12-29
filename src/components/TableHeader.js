import React from "react";
import RenderData from './RenderData';
import './TableHeader.css';




 const Table = props => {
     const {outputtable} =props;
  return (
    <table className='tablo'>
            <thead >
                <tr className='header'>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                </tr>
                <RenderData outputtable={outputtable} className='render'/>
            </thead>
    </table>
  );
};

export default Table;