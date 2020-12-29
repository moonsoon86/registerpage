import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import TableHeader from './components/TableHeader';
import Image from './components/image';




function App() {

    const [outputtable, setOutputTable]= useState([]);
    const updatedTable= userDetails=>{
      setOutputTable ([...outputtable, userDetails]);
    };


  return (
    <div className="App">
        <Image/>
        <Form updatedTable={updatedTable}/>
        <TableHeader outputtable={outputtable}/>
    </div>
  );
}

export default App;
