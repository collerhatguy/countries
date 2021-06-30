import React from 'react'

export default function Header({dark, setDark}) {
    
    return (
        <header>
            <h1>Where in the world?</h1>
            <button onClick={() => setDark(!dark)}>{dark ? "Light" : "Dark"} Mode</button>
        </header>
    )
}
