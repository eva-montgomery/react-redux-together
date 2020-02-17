// - count 
// - handleIncrement
// - handleDecrement
// - handleReset


import React from 'react';

function Counter({
    count,
    handleIncrement,
    handleDecrement,
    handleReset,

}) {

    // Modifying the Counter App
    // exercise 1: When the number is even, make the text color red.
    // exercise 2: When the number is odd, make the text color green.
    // exercise 3: When the number is divisible by 10, make the text color orange.    
    let style;
    if (count % 10 == 0) {
        style = {color:"orange"}
    }
    else if (count % 2 == 0) {
        style = {color:"red"}
    } else if (!count % 2 == 0) {
        style = {color:"blue"}
    } 
    
    return (
        <div>
            <h1 style={style}>{count}</h1>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleReset}>0</button>
            
        </div>
    );
}

export default Counter;

