import React, { useState, useMemo, useEffect } from "react";

export default usememo => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const doublenumber = useMemo(() => {
        return slowFunction(number)
    }, [number]);
    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? "black" : 'white',
            color: dark ? 'white' : 'black'
        }
    }, [dark]);
    function slowFunction(num) {
        console.log("calling slow fucntion");
        for (let i = 0; i <= 1000000000; i++) {
            return num * 2
        }
    }
    useEffect(() => {
        console.log('Theme changed')
    }, [themeStyles]);
    return (
        <>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
            <div style={themeStyles}>{doublenumber}</div>
        </>
    )
}