import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { create } from 'mobx-persist';


// Import all Pages here.
import SplashScreen from "./pages/SplashScreen";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";

// Import all stores here.
import GameStore from "./stores/GameStore";


export default class Routes extends Component {
  constructor(props) {
    super(props);
    let hydrate = create({})
    this.Store = new GameStore();
    hydrate('games', this.Store).then(() => console.log("Hydrate done : Games"))
    hydrate('list', this.Store).then(() => console.log("Hydrate done : List"))
  }

  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => <SplashScreen {...props} store={this.Store} />} />
          <Route path="/home" render={(props) => <HomePage {...props} store={this.Store} />} />
          <Route path="/game" render={(props) => <GamePage {...props} />} />
        </Switch>
      </Router>
    )
  }
}

