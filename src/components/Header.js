import React from 'react'

export default function Header({dark, setDark}) {
    const darkStyles = { 
        backgroundColor: "hsl(209, 23%, 22%)",
        color: "white"
    }
    return (
        <header style={dark ? darkStyles : {}}>
            <h1>Where in the world?</h1>
            <button 
            style={dark ? darkStyles : {}}
            onClick={() => setDark(!dark)}>{dark ? "Light" : "Dark"} Mode</button>
        </header>
    )
}
