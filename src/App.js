import {useState, useEffect} from "react";
import SearchSection from "./components/SearchSection";
import Header from "./components/Header";
import CountryList from "./components/CountryList";
import "./style/style.css";

function App() {
  const url = "https://restcountries.eu/rest/v2/all";
  const [data, setData] = useState([])
  async function getData() {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json)
      console.log(json)
    } catch(err) {
      throw err;
    }
  }
  useEffect(() => {
    getData()
  },[])
  return (
    <main className="App">
      <Header />
      <SearchSection />
      <CountryList countries={data} />
    </main>
  );
}

export default App;
