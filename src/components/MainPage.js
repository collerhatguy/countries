import React from 'react';
import SearchSection from "./SearchSection";
import CountryList from "./CountryList";
import styled from "styled-components"

const StyledMain = styled.main`
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.fontColor};
`

function MainPage() {
    return (
        <StyledMain>
            <SearchSection/>
            <CountryList/>
        </StyledMain>
    )
}



export default MainPage