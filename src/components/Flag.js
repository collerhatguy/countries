import React from 'react'
import styled from "styled-components"

const StyledFlag = styled.div`
    width: 100%;
    height: 100%;
    img {
        width: 100%;
        height: 100%;
    }
`

export default function Flag(props) {
    const { flag, name } = props
    return (
        <StyledFlag className="flag-container">
            <img 
                src={flag} 
                alt={`${name}-flag`}
            />
        </StyledFlag>
    )
}
