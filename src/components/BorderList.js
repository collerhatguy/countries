import React from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import { v4 as uuid } from "uuid"

const StyledBorders = styled.h3`
    margin-bottom: 1rem;
`

export default function BorderList(props) {
    const { borders, dark, countries } = props
    if (borders.length === 0) return null
    const newBorders = borders.map(b => 
        countries.find(c => 
            c.alpha3Code === b    
        ).name
    )
    return (
        <StyledBorders className="country-borders">
            <span className="country-label">
                Border Countries: <br/>    
            </span>
            {
                newBorders.map(border =>
                    <Link 
                        key={uuid()}
                        to={`/countries/${border}`}
                        data-dark={dark}
                        className="country-link"
                    >{ border }</Link>
                )
            }
        </StyledBorders>
    )
}
