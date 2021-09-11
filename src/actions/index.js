import axios from "axios"


export const SWAP_THEME = "SWAP_THEME"
export const swapTheme = () => ({
    type: SWAP_THEME,  
})

export const SEARCH = "SEARCH"
export const search = values => ({
    type: SEARCH, 
    payload: values
})

export const GET_DATA = "GET_DATA"
export const SET_ERROR = "SET_ERROR"
export const getData = () => dispatch => {
    axios.get("https://restcountries.eu/rest/v2/all")
        .then(countries => 
            dispatch({ 
                type: GET_DATA, 
                payload: countries.data 
            })
        ).catch(err => 
            dispatch({ 
                type: SET_ERROR, 
                payload: err 
            })    
        )
}