import React from 'react'

export default function SearchSection({setRegion}) {
    return (
        <section className="search-section">
            <input className="search-bar" type="text" placeholder="Search for a country" />
            <label for="region">
                Filter by Region
                <input 
                onChange={e => setRegion(e.target.value)}
                list="region-list" 
                name="region" 
                id="region" />
            </label>
            <datalist id="region-list">
                <option value="Africa"/>
                <option value="America"/>
                <option value="Asia"/>
                <option value="Europe"/>
                <option value="Oceania"/>
            </datalist>
        </section>
    )
}
