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
        .then(res => 
            dispatch({ 
                type: GET_DATA, 
                payload: res.data.map(c => ({
                    ...c,
                    Population: c.population.toLocaleString("en-US"),
                    Native_Name: c.nativeName,
                    Sub_Region: c.subregion,
                    Region: c.region,
                    Capital: c.capital,
                    Top_Level_Domain: c.topLevelDomain[0],
                    Currency: c.currencies[0].name,
                    Languages: c.languages.map(l => 
                        l.name
                    ).join(", ")
                })) 
            })
        ).catch(err => 
            dispatch({ 
                type: SET_ERROR, 
                payload: err 
            })    
        )
}