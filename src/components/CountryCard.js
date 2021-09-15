import React from 'react'
import { Link } from "react-router-dom"
import DetailList from "./DetailList"
import Flag from './Flag'
import styled from "styled-components"

const StyledCard = styled.div`
    background-color: ${props => props.theme.panelColor};
    color: ${props => props.theme.fontColor};
    margin: 1rem .5rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    width: 300px;
    height: 400px;
    .text-container {
        min-height: min-content;
        padding: 2rem;
        .country-name {
            font-weight: 800;
        }
    }
    .country-name {
        margin-bottom: 2rem;
    }
`

export default function CountryCard(props) {
    const { country } = props
    const { name, flag } = country
    const details = ["Population", "Region", "Capital"]

    return (
        <Link to={`/countries/${name}`} >
            <StyledCard className="country-card">
                <Flag 
                    flag={flag} 
                    name={name}
                />
                <div className="text-container">
                    <h2 className="country-name">
                        {name}
                    </h2>
                    <DetailList 
                        details={details} 
                        country={country} 
                    />
                </div>
            </StyledCard>
        </Link>
    )
}
