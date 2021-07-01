import React from 'react';
import CountryCard from "./CountryCard";

export default function CountryList({dark, countries, setCountry}) {
    return (
        <section className="country-list">
            {countries.map((country, index) => {
                return <CountryCard 
                    dark={dark} 
                    country={country} 
                    moreDetail={() => setCountry(country)} 
                    key={index} 
                />
            })}
        </section>
    )
}
