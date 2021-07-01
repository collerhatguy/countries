import React from 'react';
import SearchSection from "./SearchSection";
import CountryList from "./CountryList";

export default function MainPage({dark, setRegionSearch, setCountrySearch, data}) {
    return (
        <main>
            <SearchSection 
            dark={dark} 
            setRegionSearch={setRegionSearch} 
            setCountrySearch={setCountrySearch} 
            />
            <CountryList dark={dark} countries={data} />
        </main>
    )
}
