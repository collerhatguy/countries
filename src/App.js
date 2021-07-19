import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// components
import MainPage from "./components/MainPage";
import Header from "./components/Header";
import DetailedCountryCard from "./components/DetailedCountryCard";
// styles
import "./style/style.css";
import { darkTheme, lightTheme } from "./theme";
// hooks
import useAPI from "./hooks/useAPI";
import useSearch from "./hooks/useSearch";
import styled, { ThemeProvider } from "styled-components";

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

  const StyledDiv = styled.div`
    background-color: ${props => props.theme.background};
  `
  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <StyledDiv>
        <Header dark={dark} setDark={setDark} />
        <Router>
          <Switch>
            <Route path="/countries/" exact>
                <MainPage
                  setRegionSearch={setRegionSearch} 
                  setCountrySearch={setCountrySearch} 
                  data={data}
                />
            </Route>
            <Route path="/countries/:countryName">
                <DetailedCountryCard initialData={initialData} />
            </Route>
            <Redirect to="/countries/" />
          </Switch>
        </Router>
      </StyledDiv>
    </ThemeProvider>
  );
}

export default App;
