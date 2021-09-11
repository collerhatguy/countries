import React, { useState, useEffect } from 'react';
import {Link, useHistory, useParams} from "react-router-dom";

export default function DetailedCountryCard(props) {
    const {dark, initialData} = props;
    const { countryName } = useParams();
    const [country, setCountry] = useState()
    useEffect(() => {
        setCountry(initialData.find(c => c.name === countryName));
    }, [countryName])
    return (
        <main 
        data-dark={dark}
        className="detailed-page">
            <Link className="back-link"
            data-dark={dark}           
            to="/countries/"
            >Back</Link>
            <div className="detailed-country-card">
                <div className="flag-container">
                    <img src={country?.flag} alt={`${country?.name}-flag`} />
                </div>
                <div 
                data-dark={dark}
                className="text-container">
                    <h2 className="country-name">
                        {country?.name}
                    </h2>
                    <div className="details-container">
                        <h3 className="country-native-name">
                            <span className="country-label">Native Name: </span> 
                            {country?.nativeName}
                        </h3>
                        <h3 className="country-population">
                            <span className="country-label">Population: </span> 
                            {country?.population.toLocaleString("en-US")}
                        </h3>
                        <h3 className="country-region">
                            <span className="country-label">Region: </span>
                            {country?.region}
                        </h3>
                        <h3 className="country-sub-region">
                            <span className="country-label">Sub Region: </span>
                            {country?.subregion}
                        </h3>
                        <h3 className="country-capital">
                            <span className="country-label">Capital: </span>
                            {country?.capital}
                        </h3>
                        <h3 className="country-top-level-domain">
                            <span className="country-label">Top Level Domain: </span>
                            {country?.topLevelDomain[0]}
                        </h3>
                        <h3 className="country-currency">
                            <span className="country-label">Currency: </span>
                            {country?.currencies[0].name}
                        </h3>
                        <h3 className="country-languages">
                            <span className="country-label">Languages: </span>
                            {country?.languages.map((language, index) => `${language.name}${index === country.languages.length - 1 ? "" : ","} `)}
                        </h3>
                        {country?.borders.length === 0 ? null : <h3 className="country-borders">
                            <span className="country-label">Border Countries: </span>
                            {country?.borders.map((border, index) => {
                                const borderCountry = initialData.find(country => country.alpha3Code === border)
                                return <Link 
                                to={`/countries/${borderCountry.name}`}
                                data-dark={dark}
                                className="country-link">{`${borderCountry.name}`}</Link>
                            })}
                        </h3>
                        }
                        
                    </div>
                </div>
            </div>
        </main>
    )
}
