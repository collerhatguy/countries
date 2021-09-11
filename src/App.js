import { useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import MainPage from "./components/MainPage"
import Header from "./components/Header"
import DetailedCountryCard from "./components/DetailedCountryCard"
import "./style/style.css"
import { connect } from "react-redux" 
import { getData } from "./actions"

function App(props) {
  const { getData, dark } = props

  useEffect(getData, [])

  return (
    <div 
      data-dark={dark}
      className="App">
      <Header/>
      <Router>
        <Switch>
          <Route path="/countries/:countryName">
            <DetailedCountryCard dark={dark}/>
          </Route>
          <Route path="/countries/">
            <MainPage dark={dark}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = state => ({
  dark: state.dark
})

export default connect(mapStateToProps, { getData })(App);
