import {useEffect, useState} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
// components
import MainPage from "./components/MainPage";
import Header from "./components/Header";
import DetailedCountryCard from "./components/DetailedCountryCard";
// styles
import "./style/style.css";
// hooks
import useAPI from "./hooks/useAPI";
import useSearch from "./hooks/useSearch";

function App() {
  const [data, setData, initialData] = useAPI();

  const [regionSearch, setRegionSearch] = useState("")
  useSearch({
    searchQuery: regionSearch, 
    initialData: initialData, 
    setData: setData, 
    searchTarget: "region"
  })

  const [countrySearch, setCountrySearch] = useState("")
  useSearch({
    searchQuery: countrySearch, 
    initialData: initialData, 
    setData: setData, 
    searchTarget: "name"
  })

  const [dark, setDark] = useState(false);
  return (
    <div 
    data-dark={dark}
    className="App">
      <Header dark={dark} setDark={setDark} />
      <Router>
        <Switch>
          <Route 
            path="/countries/" 
            exact
            component={() =>
              <MainPage
                dark={dark} 
                setRegionSearch={setRegionSearch} 
                setCountrySearch={setCountrySearch} 
                data={data}
              />
            } 
          />
          <Route 
            path="/countries/:countryName"
            component={() => 
              <DetailedCountryCard 
                dark={dark}
                initialData={initialData}
              />
            } 
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
