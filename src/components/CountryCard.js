import React from 'react';
import {Link } from "react-router-dom";

export default function CountryCard({dark, country, moreDetail}) {
    const darkStyles = {
        backgroundColor: "hsl(209, 23%, 22%)",
        color: "white"
    }
    return (
        <Link onClick={() => moreDetail()} to="/details" >
            <div className="country-card">
                <div className="flag-container">
                    <img src={country.flag} />
                </div>
                <div 
                style={dark ? darkStyles : {}}
                className="text-container">
                    <h2 className="country-name">
                        {country.name}
                    </h2>
                    <h3 className="country-population">
                        <span className="country-label">Population: </span> 
                        {country.population.toLocaleString("en-US")}
                    </h3>
                    <h3 className="country-region">
                        <span className="country-label">Region: </span>
                        {country.region}
                    </h3>
                    <h3 className="country-capital">
                        <span className="country-label">Capital: </span>
                        {country.capital}
                    </h3>
                </div>
            </div>
        </Link>
    )
}
