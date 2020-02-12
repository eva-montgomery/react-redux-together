// - count 
// - handleIncrement
// - handleDecrement
// - handleReset


import React from 'react';

function Counter({
    count,
    handleIncrement,
    handleDecrement,
    handleReset
}) {
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleReset}>0</button>
        </div>
    );
}

export default Counter;

