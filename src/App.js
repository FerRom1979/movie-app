import Header from "./components/Header"
import { GlobalStyles } from "./global-styled"
import Home from "./pages/home"
import Movie from "./pages/Movie"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path='/:movieId' component={Movie} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  )
}

export default App
