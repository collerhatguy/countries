import {useState, useEffect} from "react";
import SearchSection from "./components/SearchSection";
import Header from "./components/Header";
import CountryList from "./components/CountryList";
import "./style/style.css";

function App() {
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

  const [regionSearch, setRegionSearch] = useState("")
  useEffect(() => {
    setData(initialData.filter(country => {
      if (regionSearch === "") return true;
      return country.region.includes(regionSearch);
    }))
  }, [regionSearch]);

  const [countrySearch, setCountrySearch] = useState("")
  useEffect(() => {
    setData(initialData.filter(country => {
      if (countrySearch === "") return true;
      return country.name.includes(countrySearch);
    }))
  }, [countrySearch]);

  const [dark, setDark] = useState(false);
  const darkStyles = {
    backgroundColor: "hsl(200, 15%, 8%)",
  }
  return (
    <main 
    style={dark ? darkStyles : {}}
    className="App">
      <Header dark={dark} setDark={setDark} />
      <SearchSection dark={dark} setRegion={setRegionSearch} setCountrySearch={setCountrySearch} />
      <CountryList dark={dark} countries={data} />
    </main>
  );
}

export default App;
