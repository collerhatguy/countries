import React from 'react';
import {Link } from "react-router-dom";

export default function CountryCard(props) {
    const { dark, country } = props
    const { name, flag, population, region, capital } = country
    return (
        <Link to={`/countries/${name}`} >
            <div className="country-card">
                <div className="flag-container">
                    <img src={flag} alt={`${name}-flag`}/>
                </div>
                <div
                data-dark={dark}
                className="text-container">
                    <h2 className="country-name">
                        {name}
                    </h2>
                    <h3 className="country-population">
                        <span className="country-label">Population: </span> 
                        {population.toLocaleString("en-US")}
                    </h3>
                    <h3 className="country-region">
                        <span className="country-label">Region: </span>
                        {region}
                    </h3>
                    <h3 className="country-capital">
                        <span className="country-label">Capital: </span>
                        {capital}
                    </h3>
                </div>
            </div>
        </Link>
    )
}
