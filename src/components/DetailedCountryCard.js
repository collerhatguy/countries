import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams, useHistory } from "react-router-dom"
import BorderList from './BorderList'
import DetailList from './DetailList'
import Flag from "./Flag"

function DetailedCountryCard(props) {
    const { dark, countries } = props
    const { countryName } = useParams()
    const [country, setCountry] = useState()
    const { goBack } = useHistory()

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
        <main 
            data-dark={dark}
            className="detailed-page">
            <button 
                className="back-link"
                data-dark={dark}
                onClick={goBack}
            >Back</button>
            <div className="detailed-country-card">
                <Flag 
                    flag={flag}
                    name={name}
                />
                <div 
                    data-dark={dark}
                    className="text-container">
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