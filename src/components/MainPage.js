import React from 'react';
import SearchSection from "./SearchSection";
import CountryList from "./CountryList";

function MainPage(props) {
    const { dark } = props
    return (
        <main data-dark={dark}>
            <SearchSection dark={dark}/>
            <CountryList dark={dark}/>
        </main>
    )
}



export default MainPage