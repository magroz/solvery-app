import React, {useState} from 'react';
import './App.css';
import {Table} from "./Components/Table";

function App() {
    const [isShowTable, setTable] = useState(true)
    return (
        <div className="App">
            <button onClick={() => setTable(!isShowTable)}>click</button>
            {isShowTable && <Table/>}
        </div>
    );
}

export default App;
