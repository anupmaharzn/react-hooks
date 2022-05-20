import React, { useState } from "react";

export default function Usestate() {
    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState('blue');

    function decrementCount() {
        setCount(prevcount => prevcount - 1);
        setTheme('blue');
    }

    function incrementCount() {
        setCount(prevcount => prevcount + 1)
        setTheme('red');
    }
    return (
        <>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <span>{theme}</span>
            <button onClick={incrementCount}>+</button>
        </>
    )
}