import {useState, useEffect} from "react";

export default function useAPI() {

    const url = "https://restcountries.eu/rest/v2/all";
    const [data, setData] = useState([])
    const [initialData, setInitialData] = useState([])
    async function getData() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setInitialData(json)
        setData(json)
        console.log(json)
      } catch(err) {
        throw err;
      }
    }
  
    useEffect(() => {
      getData()
    },[]);
    return [data, setData, initialData]
};