import React, {useState} from 'react';
import './App.css';
import Button from "./Components/Button/Button";
import ButtonHooks from "./Components/ButtonHooks/ButtonHooks";

function App() {
    const [isBtnDisabled, setIsBtnDisabled] = useState(true)
    function requestApi() {
        return fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
    }
    return (
        <div className="App">
            <button onClick={() => setIsBtnDisabled(!isBtnDisabled)}>reverse disabled btn</button>
            <Button elementId={"testId"} onChangePromise={requestApi} isDisabled={isBtnDisabled}/>
            <ButtonHooks elementId={"testId"} isDisabled={isBtnDisabled}/>
        </div>
    );
}

export default App;
