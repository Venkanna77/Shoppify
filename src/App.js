import "./App.css";
import Header from "./componenets/Header/Header";
import Home from "./componenets/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./componenets/Login/Login";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/"> 
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
