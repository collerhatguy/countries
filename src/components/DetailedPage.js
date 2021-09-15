import React from 'react'
import styled from "styled-components"
import { useHistory } from 'react-router'
import DetailedCountryCard from './DetailedCountryCard'

const StyledPage = styled.main`
    width: 100%;
    margin-top: 2rem;
    padding: 3rem;
    background-color: ${props => props.theme.panelColor};
    color: ${props => props.theme.fontColor};
    .back-link, a {
        background-color: ${props => props.theme.panelColor};
        color: ${props => props.theme.fontColor};
        cursor: pointer;
        margin: .2rem;
        font-weight: 300;
        display: inline-block;
        border-radius: 5px;
        border: black 1px solid;
        padding: .5rem 2rem;
    }
`

export default function DetailedPage() {
    const { goBack } = useHistory()
    return (
        <StyledPage className="detailed-page">
            <button 
                className="back-link"
                onClick={goBack}
            >Back</button>
            <DetailedCountryCard/>
        </StyledPage>
    )
}
