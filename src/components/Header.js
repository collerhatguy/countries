import React from 'react'
import { connect } from 'react-redux'
import { swapTheme } from "../actions"

function Header(props) {
    const { dark, swapTheme } = props
    return (
        <header data-dark={dark}>
            <h1>Where in the world?</h1>
            <button 
                data-dark={dark}
                onClick={swapTheme}
            >{dark ? "Light" : "Dark"} Mode</button>
        </header>
    )
}

const mapStateToProps = state => ({
    dark: state.dark,
})

export default connect(mapStateToProps, { swapTheme })(Header)