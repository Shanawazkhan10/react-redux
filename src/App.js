import "./App.css";
import Login from "./Login";
// import { Router, Route, Link } from "react-router";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Logout from "./Logout";
import personalInfo from "./personalInfo";
// import { Router as BrowserRouter, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/log" component={Logout}></Route>
        <Route exact path="/info" component={personalInfo}></Route>
      </Router>
    </div>
  );
}

export default App;
