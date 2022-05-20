import React, { useContext } from 'react';
import { ThemeContext } from './usecontext';

export default function FunctionContextComponent() {
    const darkTheme = useContext(ThemeContext);
    const themestyle = {
        backgroundColor: darkTheme ? '#333' : '#ccc',
        color: darkTheme ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem'
    }
    return (
        <div style={themestyle}>Fucntion theme</div>
    )
}