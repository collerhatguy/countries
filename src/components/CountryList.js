import React from 'react'
import { connect } from 'react-redux'
import CountryCard from "./CountryCard"

function CountryList(props) {
    const { dark, countries } = props
    return (
        <section className="country-list">
            {countries.map((country, index) => 
                <CountryCard 
                    dark={dark} 
                    country={country} 
                    key={index} 
                />
            )}
        </section>
    )
}

const mapStateToProps = state => ({
    countries: state.shownCountries
})

export default connect(mapStateToProps)(CountryList)