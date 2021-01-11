import React from "react"
import "./Components/FirstLesson/FirstLesson.css"
import { SideBar } from "./Components/SideBar"
import AppRouter from "./Components/AppRouter"

function App() {
    return (
        <div style={{ display: "flex" }}>
            <div
                style={{
                    padding: "10px",
                    width: "40%",
                    background: "#f0f0f0",
                }}
            >
                <SideBar />
            </div>
            <div style={{ marginLeft: "10px" }}>
                <AppRouter />
            </div>
        </div>
    )
}

export default App
