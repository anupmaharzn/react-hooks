import React, { useState, useEffect } from "react";

export default function Useeffect() {
    const [resourceType, setResourceType] = useState('users')
    //just the const item decelaration vayo(state) with second destructer element as fucntion
    // that works as setstate
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType]);
    return (
        <>
            <div>
                <button onClick={() => setResourceType('posts')}>posts</button>
                <button onClick={() => setResourceType('users')}>users</button>
                <button onClick={() => setResourceType('comments')}>comments</button>
            </div>
            <h1>{resourceType}</h1>
            {items.map(item => { return <pre>{JSON.stringify(item)}</pre> })}
        </>
    )
}