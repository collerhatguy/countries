import { GET_DATA, SEARCH, SET_ERROR, SWAP_THEME } from "../actions"

const initialState = {
    allCountries: [],
    shownCountries: [],
    err: "",
    dark: true
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH:
            return {
                ...state,
                shownCountries: state.allCountries.filter(country => {
                    const { payload: search } = action
                    const searchedFor = Object.keys(search).reduce((searchedFor, term) => {
                        if (search[term] === "") return searchedFor
                        const countryProperty = country[term].toLowerCase()
                        const searchedProperty = search[term].toLowerCase()
                        if (!countryProperty.includes(searchedProperty)) return false
                        return searchedFor
                    }, true)
                    return searchedFor
                })
            }
        case SWAP_THEME:
            return {
                ...state,
                dark: !state.dark
            }
        case GET_DATA:
            return {
                ...state,
                allCountries: action.payload,
                shownCountries: action.payload,
            }
        case SET_ERROR:
            return {
                ...state,
                err: action.payload
            }
        default:
            return state
    }
}

export default reducer