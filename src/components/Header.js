import React from 'react'
import { connect } from 'react-redux'
import { swapTheme } from "../actions"
import styled from "styled-components"

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
        background-color: ${props => props.theme.panelColor};
        color: ${props => props.theme.fontColor};
        border: 0;
        margin: 2rem 5rem;
        font-weight: 300;
    }
`

function Header(props) {
    const { dark, swapTheme } = props
    return (
        <StyledHeader>
            <h1>Where in the world?</h1>
            <button onClick={swapTheme}>
                {dark ? "Light" : "Dark"} Mode
            </button>
        </StyledHeader>
    )
}

const mapStateToProps = state => ({
    dark: state.dark,
})

export default connect(mapStateToProps, { swapTheme })(Header)