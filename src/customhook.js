import React from 'react';
import useLocalStorage from './useLocalStorage';

export default function App() {

    const [name, setName] = useLocalStorage('name1', '');

    return (
        <>
            <p>Custom hook example</p>
            <input
                type='text'
                value={name}
                onChange={e => setName(e.target.value)}

            />
        </>
    )

}