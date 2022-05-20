
import React, { useState, useEffect, useRef } from "react";


export default function Useref() {

    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');
    const renderCount = useRef(1);
    const inputRef = useRef();
    const prevName = useRef('');
    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });
    function focus() {
        inputRef.current.focus()
    }
    useEffect(() => {
        prevName.current = name1;
    }, [name1]);
    return (
        <>
            <input value={name1} onChange={e => setName1(e.target.value)} />
            <div>My name is {name1}</div>
            <div>rendred {renderCount.current} times  </div>
            <p>another useref example</p>
            <input ref={inputRef} value={name2} onChange={e => setName2(e.target.value)} />
            <button onClick={focus}>Focus</button>
            <p> another example useref</p>
            <div> my name is {name1} and it used to be {prevName.current}</div>
        </>
    )

}