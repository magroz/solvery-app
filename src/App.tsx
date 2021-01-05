import React, { useState } from "react"
import "./App.css"
import Button from "./Components/Button/Button"
import ButtonHooks from "./Components/ButtonHooks/ButtonHooks"
import { SideBar } from "./Components/SideBar"

function App() {
    const [isBtnDisabled, setIsBtnDisabled] = useState<boolean>(true)

    return (
        <div className="App">
            <button onClick={() => setIsBtnDisabled(!isBtnDisabled)}>
                reverse disabled btn
            </button>
            <Button
                elementId={"testId"}
                onChangePromise={() => console.log("1")}
                isDisabled={isBtnDisabled}
            />
            <ButtonHooks
                elementId={"testId"}
                isDisabled={isBtnDisabled}
                title={"btn"}
                onClick={() => console.log("btn 2")}
            />
            <SideBar />
        </div>
    )
}

export default App
