import './App.css';
import Navbar from "./Navbar.js"
import Watchlist from "./Watchlist.js"
import Marketplace from "./Marketplace.js"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
    
    <Switch>
    <Route exact path="/marketplace" component={Marketplace}/>
      <Route exact path="/" component={Watchlist}/>
    </Switch>
  
    </div>
    </Router>
  );
}

export default App;
