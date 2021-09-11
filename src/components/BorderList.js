import React from 'react'
import { Link } from "react-router-dom"

export default function BorderList(props) {
    const { borders, dark, countries } = props
    if (borders.length === 0) return null
    return (
        <h3 className="country-borders">
            <span className="country-label">Border Countries: </span>
            {borders.map(border => {
                const borderCountry = countries.find(country => 
                    country.alpha3Code === border
                )
                return <Link 
                    to={`/countries/${borderCountry.name}`}
                    data-dark={dark}
                    className="country-link"
                >{`${borderCountry.name}`}</Link>
            })}
        </h3>
    )
}
