import React from 'react';
import SearchSection from "./SearchSection";
import CountryList from "./CountryList";
import styled from 'styled-components';

export default function MainPage({ setRegionSearch, setCountrySearch, data}) {
    const StyledMain = styled.main`
        background-color: ${props => props.theme.background};
        color: ${props => props.theme.fontColor};
    `
    return (
        <StyledMain>
            <SearchSection 
            setRegionSearch={setRegionSearch} 
            setCountrySearch={setCountrySearch} 
            />
            <CountryList countries={data} />
        </StyledMain>
    )
}
