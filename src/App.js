import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "../src/components/views/LandingPage/LandingPage.js";
import LoginPage from "../src/components/views/LoginPage/LoginPage.js";
import ResisterPage from "../src/components/views/ResisterPage/Resister.js";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/resister" component={ResisterPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
