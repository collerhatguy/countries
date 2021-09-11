import React from 'react'

export default function Detail(props) {
    const { detail, value } = props
    return (
        <h3>
            <span className="country-label">{detail.replace("_", " ")}: </span> 
            {value}
        </h3>
    )
}
