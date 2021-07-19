import React from 'react';
import styled from "styled-components";

export default function SearchSection({ setRegionSearch, setCountrySearch}) {
    const StyledSearch = styled.section`
        width: 100%;
        display: flex;
        justify-content: space-between;
        input {
            color: ${props => props.theme.fontColor};
            margin: 2rem;
            padding: 1rem;
            outline: none;
        }

        @media(max-width: 500px) {
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
    `
    return (
        <StyledSearch>
            <input
            onChange={e => setCountrySearch(e.target.value)}
            className="search-bar" 
            type="text" 
            placeholder="Search for a country" 
            />
            <label for="region">
                Filter by Region
                <input
                onChange={e => setRegionSearch(e.target.value)}
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
        </StyledSearch>
    )
}
