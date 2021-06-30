import {useState, useEffect} from "react";
import "./style/style.css";

function App() {
  const url = "https://restcountries.eu/rest/v2/all";
  const [data, setData] = useState()
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
    <div className="App">
    </div>
  );
}

export default App;
