import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams, useHistory } from "react-router-dom"
import BorderList from './BorderList'
import Detail from './Detail'
import Flag from "./Flag"
import { v4 as uuid } from "uuid"

const defaultCountry = {
    name: "",
    flag: "",
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
        borders
    } = country

    const details = [
        "Population", "Region", "Capital", 
        "Native_Name", "Sub_Region", "Top_Level_Domain",
        "Currency", "Languages"
    ]

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
                        {
                            details.map(d => 
                                <Detail 
                                    detail={d} 
                                    value={country[d]}
                                    key={uuid()}
                                />
                            )
                        }
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