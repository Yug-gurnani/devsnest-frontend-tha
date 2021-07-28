import React from 'react'
import { useState } from "react";


function Counter() {
    const [counter, setCounter] = useState(0);
    return (
        <div className='button' >
            <button onClick = { () => setCounter(counter+1) } >{counter}</button>
        </div>
    )
}

export default Counter
