import React from 'react';
import styled from 'styled-components';
import CountryCard from "./CountryCard";

export default function CountryList({ countries }) {
    const StyledList = styled.ul`
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
    ` 
    return (
        <section>
            <StyledList>
                {countries.map((country, index) => 
                    <CountryCard 
                        country={country} 
                        key={index} 
                    />
                )}
            </StyledList>
        </section>
    )
}
