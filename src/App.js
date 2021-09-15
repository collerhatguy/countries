import { useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import MainPage from "./components/MainPage"
import Header from "./components/Header"
import "./style/style.css"
import styled, { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "./theme"
import { connect } from "react-redux" 
import { getData } from "./actions"
import DetailedPage from "./components/DetailedPage"

const StyledDiv = styled.div`
  background-color: ${props => props.theme.background};
  min-height: 100vh;
`

function App(props) {
  const { getData, dark } = props

  useEffect(getData, [])

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <StyledDiv className="App">
        <Header/>
        <Router>
          <Switch>
            <Route path="/countries/:countryName">
              <DetailedPage/>
            </Route>
            <Route path="/countries/">
              <MainPage/>
            </Route>
          </Switch>
        </Router>
      </StyledDiv>
    </ThemeProvider>
  );
}

const mapStateToProps = state => ({
  dark: state.dark
})

export default connect(mapStateToProps, { getData })(App);
