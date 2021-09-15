import React from 'react'
import styled from 'styled-components'

const StyledDetail = styled.h3`
    margin: 1rem 1rem 1rem 0;
    span {
        font-weight: 800;
        margin-right: 1rem;
    }
`

export default function Detail(props) {
    const { detail, value } = props
    return (
        <StyledDetail>
            <span className="country-label">
                {detail.replace("_", " ")}: 
            </span> 
            {value}
        </StyledDetail>
    )
}
