import React from 'react';
import CountryCard from "./CountryCard";

export default function CountryList({countries}) {
    return (
        <section className="country-list">
            {countries.map((country, index) => {
                return <CountryCard country={country} key={index} />
            })}
        </section>
    )
}
