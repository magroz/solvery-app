import React, { useState } from "react"
import "./FirstLesson.css"
import Button from "../Button/Button"
import ButtonHooks from "../ButtonHooks/ButtonHooks"

export function FirstLesson() {
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
                elementId={"testId2"}
                isDisabled={isBtnDisabled}
                title={"btn"}
                onClick={() => console.log("btn 2")}
            />
        </div>
    )
}
