import React from 'react'

export default function SearchSection({dark, setRegionSearch, setCountrySearch}) {

    return (
        <section className="search-section">
            <input
            data-dark={dark}
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
                data-dark={dark} 
                onChange={e => setRegionSearch(e.target.value)}
                list="region-list" 
                name="region" 
                id="region" />
            </label>
            <datalist
            id="region-list">
                <option 
                value="Africa"/>
                <option 
                value="America"/>
                <option 
                value="Asia"/>
                <option 
                value="Europe"/>
                <option 
                value="Oceania"/>
            </datalist>
        </section>
    )
}
