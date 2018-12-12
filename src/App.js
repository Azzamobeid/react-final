import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <>
          <NavBar />
          <div className="container mt-2">
            <Route name="Home" exact path="/" component={Home} />
          </div>
        </>
      </Router>
    );
  }
}

export default App;
