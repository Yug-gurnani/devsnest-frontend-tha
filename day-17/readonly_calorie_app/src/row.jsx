import React from 'react'
import "./App.css";
function row({ name, calories }) {
    return (
        <div className='row'>
            <h1>{name}</h1>
            <h2>This item has {calories} calories</h2>
        </div>
    )
}

export default row
