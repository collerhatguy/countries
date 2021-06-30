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

  const [region, setRegion] = useState("")
  useEffect(() => {
    setData(initialData.filter(country => {
      if (region === "") return true;
      return country.region.includes(region);
    }))
  }, [region]);

  const [dark, setDark] = useState(false);
  return (
    <main className="App">
      <Header dark={dark} setDark={setDark} />
      <SearchSection setRegion={setRegion} />
      <CountryList countries={data} />
    </main>
  );
}

export default App;
