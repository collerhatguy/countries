import React from 'react'

export default function Header({dark, setDark}) {
    return (
        <header data-dark={dark}>
            <h1>Where in the world?</h1>
            <button 
            data-dark={dark}
            onClick={() => setDark(!dark)}>{dark ? "Light" : "Dark"} Mode</button>
        </header>
    )
}
