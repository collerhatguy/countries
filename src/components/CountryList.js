import React from 'react'
import { connect } from 'react-redux'
import CountryCard from "./CountryCard"
import styled from "styled-components"

const StyledList = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
` 

function CountryList(props) {
    const { countries } = props
    return (
        <StyledList className="country-list">
            {countries.map((country, index) => 
                <CountryCard 
                    country={country} 
                    key={index} 
                />
            )}
        </StyledList>
    )
}

const mapStateToProps = state => ({
    countries: state.shownCountries
})

export default connect(mapStateToProps)(CountryList)