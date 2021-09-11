import React from 'react'
import { Link } from "react-router-dom"
import { v4 as uuid } from "uuid"

export default function BorderList(props) {
    const { borders, dark, countries } = props
    if (borders.length === 0) return null
    const newBorders = borders.map(b => 
        countries.find(c => 
            c.alpha3Code === b    
        ).name
    )
    return (
        <h3 className="country-borders">
            <span className="country-label">Border Countries: </span>
            {
                newBorders.map(border =>
                    <Link 
                        key={uuid()}
                        to={`/countries/${border}`}
                        data-dark={dark}
                        className="country-link"
                    >{ border }</Link>
                )
            }
        </h3>
    )
}
