import React, {useState} from 'react';
import './App.css';
import {Table} from "./Components/Table";
import Button from "./Components/Button/Button";

function App() {
    const [isShowTable, setTable] = useState(true)
    return (
        <div className="App">
            <button onClick={() => setTable(!isShowTable)}>click</button>
            {isShowTable && <Table/>}
            <Button/>
        </div>
    );
}

export default App;
