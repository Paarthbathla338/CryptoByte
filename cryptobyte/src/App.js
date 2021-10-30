import './App.css';
import Navbar from "./Navbar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Marketplace from "./Marketplace"
import Buysell from "./Buysell"


function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
    <Switch>
      <Route path="/Marketplace">
        <Marketplace/>
      </Route>
      <Route path="/buy_sell">
        <Buysell/>
      </Route>

    </Switch>
    </div>
    </Router>
  );
}

export default App;
