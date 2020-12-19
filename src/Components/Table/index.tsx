import React, {useState, useEffect} from "react"

export const Table = () => {
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        if (counter) console.log(counter)
    }, [counter])
    return <div>
        <button onClick={() => setCounter(counter + 1)}>count</button>
        Hello world!
    </div>
}