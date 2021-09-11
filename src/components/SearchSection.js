import React from 'react'
import { connect } from 'react-redux'
import useForm from '../hooks/useForm'
import useDebounce from '../hooks/useDebounce'
import { search } from "../actions"

const initialForm = {
    name: "",
    region: "",
}

function SearchSection(props) {
    const { dark, search } = props
    const [form, handleChange] = useForm(initialForm)

    useDebounce(() => 
        search(form)
    , 1000, [form])

    return (
        <section className="search-section">
            <input
                data-dark={dark}
                onChange={handleChange}
                value={form.country}
                className="search-bar" 
                type="text"
                name="name" 
                placeholder="Search for a country" 
            />
            <label 
                style={dark ? {color: "white"} : {}}
                for="region">
                Filter by Region
                <input
                    data-dark={dark} 
                    onChange={handleChange}
                    value={form.region}
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
        </section>
    )
}

export default connect(null, { search })(SearchSection)