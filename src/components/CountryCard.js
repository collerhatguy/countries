import React from 'react'
import { Link } from "react-router-dom"
import Detail from "./Detail"
import Flag from './Flag'

export default function CountryCard(props) {
    const { dark, country } = props
    const { 
        name, 
        flag, 
    } = country
    const details = ["Population", "Region", "Capital"]
    return (
        <Link to={`/countries/${name}`} >
            <div className="country-card">
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
                    {
                        details.map(d => 
                            <Detail 
                                detail={d} 
                                value={country[d]}
                            />
                        )
                    }
                </div>
            </div>
        </Link>
    )
}
