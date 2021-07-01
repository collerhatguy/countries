import React from 'react'

export default function SearchSection({dark, setRegionSearch, setCountrySearch}) {
    const darkStyles = { 
        backgroundColor: "hsl(209, 23%, 22%)",
        color: "white"
    }
    return (
        <section className="search-section">
            <input 
            style={dark ? darkStyles : {}}
            onChange={e => setCountrySearch(e.target.value)}
            className="search-bar" 
            type="text" 
            placeholder="Search for a country" 
            />
            <label 
            style={dark ? {color: "white"} : {}}
            for="region">
                Filter by Region
                <input 
                style={dark ? darkStyles : {}}
                onChange={e => setRegionSearch(e.target.value)}
                list="region-list" 
                name="region" 
                id="region" />
            </label>
            <datalist 
            style={dark ? darkStyles : {}}
            id="region-list">
                <option 
                style={dark ? darkStyles : {}}
                value="Africa"/>
                <option 
                style={dark ? darkStyles : {}}
                value="America"/>
                <option 
                style={dark ? darkStyles : {}}
                value="Asia"/>
                <option 
                style={dark ? darkStyles : {}}
                value="Europe"/>
                <option 
                style={dark ? darkStyles : {}}
                value="Oceania"/>
            </datalist>
        </section>
    )
}
