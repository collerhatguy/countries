import React from 'react'
import { connect } from 'react-redux'
import useForm from '../hooks/useForm'
import useDebounce from '../hooks/useDebounce'
import { search } from "../actions"
import styled from "styled-components"

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
    .search-bar {
        width: 50%;
    }
    @media(max-width: 500px) {
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`

const initialForm = {
    name: "",
    region: "",
}

function SearchSection(props) {
    const { dark, search } = props
    const [form, handleChange] = useForm(initialForm)
    const { country, region } = form

    useDebounce(() => 
        search(form)
    , 1000, [form])

    return (
        <StyledSearch className="search-section">
            <input
                data-dark={dark}
                onChange={handleChange}
                value={country}
                className="search-bar" 
                type="text"
                name="name" 
                placeholder="Search for a country" 
            />
            <label 
                htmlFor="region">
                Filter by Region
                <input
                    data-dark={dark} 
                    onChange={handleChange}
                    value={region}
                    list="region-list" 
                    name="region" 
                    id="region" 
                />
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

export default connect(null, { search })(SearchSection)