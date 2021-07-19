import React from 'react';
import {Link } from "react-router-dom";
import styled from 'styled-components';

export default function CountryCard({ country }) {
    const StyledCard = styled.div`
        background-color: ${props => props.theme.panelColor};
        color: ${props => props.theme.fontColor};
        margin: 1rem .5rem;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        width: 300px;
        height: 400px;
        .flag-container {
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .text-container {
            min-height: min-content;
            padding: 2rem;
            span, .country-name {
                font-weight: 800;
            }
        }
        .country-name {
            margin-bottom: 2rem;
        }
    `
    return (
        <Link to={`/countries/${country.name}`} >
            <StyledCard>
                <div className="flag-container">
                    <img src={country.flag} alt={`${country.name}-flag`}/>
                </div>
                <div className="text-container">
                    <h2 className="country-name">
                        {country.name}
                    </h2>
                    <h3><span>Population: </span> 
                        {country.population.toLocaleString("en-US")}
                    </h3>
                    <h3><span>Region: </span>
                        {country.region}
                    </h3>
                    <h3><span>Capital: </span>
                        {country.capital}
                    </h3>
                </div>
            </StyledCard>
        </Link>
    )
}
