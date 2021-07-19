import React from 'react';
import styled from "styled-components";

export default function Header({dark, setDark}) {
    const StyledHeader = styled.header`
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        background-color: ${props => props.theme.panelColor};
        color: ${props => props.theme.fontColor};
        h1 {
            font-weight: 800;
            margin: 2rem;
        }
        button {
            cursor: pointer;
            background-color: inherit;
            color: inherit;
            border: 0;
            margin: 2rem 5rem;
            font-weight: 300;
        }
    `
    return (
        <StyledHeader>
            <h1>Where in the world?</h1>
            <button onClick={() => setDark(!dark)}
            >{dark ? "Light" : "Dark"} Mode</button>
        </StyledHeader>
    )
}
