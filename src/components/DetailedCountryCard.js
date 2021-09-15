import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from "react-router-dom"
import BorderList from './BorderList'
import DetailList from './DetailList'
import Flag from "./Flag"
import styled from "styled-components"

const StyledCountryCard = styled.div`
    width: 100%;
    margin: 1rem;
    gap: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: ${props => props.theme.panelColor};
    color: ${props => props.theme.fontColor};
    .text-container {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: flex-start;
        .details-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
        }
    }
    @media(max-width: 900px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        
    }
`

function DetailedCountryCard(props) {
    const { countries } = props
    const { countryName } = useParams()
    const [country, setCountry] = useState()

    useEffect(() => {
        setCountry(countries.find(c => 
            c.name === countryName
        ))
    }, [countryName, countries])
    
    const details = [
        "Population", "Region", "Capital", 
        "Native_Name", "Sub_Region", 
        "Top_Level_Domain", "Currency", "Languages"
    ]

    if (!country) return null

    const { 
        name, 
        flag, 
        borders
    } = country
    
    return (
        <StyledCountryCard className="detailed-country-card">
            <Flag 
                flag={flag}
                name={name}
            />
            <div className="text-container">
                <h2 className="country-name">
                    {name}
                </h2>
                <div className="details-container">
                    <DetailList 
                        details={details} 
                        country={country} 
                    />
                    <BorderList 
                        borders={borders}
                        countries={countries}
                    />
                </div>
            </div>
        </StyledCountryCard>
    )
}

const mapStateToProps = state => ({
    countries: state.allCountries
})

export default connect(mapStateToProps)(DetailedCountryCard)