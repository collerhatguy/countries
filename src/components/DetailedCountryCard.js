import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, useParams, useHistory } from "react-router-dom"
import BorderList from './BorderList'

const defaultCountry = {
    name: "",
    flag: "",
    nativeName: "",
    population: "",
    region: "", 
    subregion: "", 
    capital: "", 
    topLevelDomain: [], 
    currencies: [{ name: "" }], 
    languages: [],
    borders: []
}

function DetailedCountryCard(props) {
    const { dark, countries } = props
    const { countryName } = useParams()
    const [country, setCountry] = useState(defaultCountry)
    const { goBack } = useHistory()

    useEffect(() => {
        setCountry(countries.find(c => 
            c.name === countryName
        ))
    }, [countryName, countries])
    
    const { 
        name, 
        flag, 
        nativeName, 
        population, 
        region, 
        subregion, 
        capital, 
        topLevelDomain: [topLevelDomain], 
        currencies: [{ name: currencyName}], 
        languages,
        borders
    } = country

    return (
        <main 
        data-dark={dark}
        className="detailed-page">
            <Link 
                className="back-link"
                data-dark={dark}
                onClick={goBack}
            >Back</Link>
            <div className="detailed-country-card">
                <div className="flag-container">
                    <img src={flag} alt={`${name}-flag`} />
                </div>
                <div 
                    data-dark={dark}
                    className="text-container">
                    <h2 className="country-name">
                        {name}
                    </h2>
                    <div className="details-container">
                        <h3 className="country-native-name">
                            <span className="country-label">Native Name: </span> 
                            {nativeName}
                        </h3>
                        <h3 className="country-population">
                            <span className="country-label">Population: </span> 
                            {population.toLocaleString("en-US")}
                        </h3>
                        <h3 className="country-region">
                            <span className="country-label">Region: </span>
                            {region}
                        </h3>
                        <h3 className="country-sub-region">
                            <span className="country-label">Sub Region: </span>
                            {subregion}
                        </h3>
                        <h3 className="country-capital">
                            <span className="country-label">Capital: </span>
                            {capital}
                        </h3>
                        <h3 className="country-top-level-domain">
                            <span className="country-label">Top Level Domain: </span>
                            {topLevelDomain}
                        </h3>
                        <h3 className="country-currency">
                            <span className="country-label">Currency: </span>
                            {currencyName}
                        </h3>
                        <h3 className="country-languages">
                            <span className="country-label">Languages: </span>
                            {
                                languages.map(language => 
                                    language.name
                                ).join(", ")
                            }
                        </h3>
                        <BorderList 
                            borders={borders} 
                            dark={dark} 
                            countries={countries}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

const mapStateToProps = state => ({
    countries: state.allCountries
})

export default connect(mapStateToProps)(DetailedCountryCard)