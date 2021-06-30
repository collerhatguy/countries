import React from 'react'

export default function CountryCard({country}) {
    return (
        <div className="country-card">
            <div className="flag-container">
                <img src={country.flag} />
            </div>
            <div className="text-container">
                <h2 className="country-name">
                    {country.name}
                </h2>
                <h3 className="country-population">
                    <span className="country-label">Population:</span> 
                    {country.population}
                </h3>
                <h3 className="country-region">
                    <span className="country-label">Region:</span>
                    {country.region}
                </h3>
                <h3 className="country-capital">
                    <span className="country-label">Capital:</span>
                    {country.capital}
                </h3>
            </div>
        </div>
    )
}
