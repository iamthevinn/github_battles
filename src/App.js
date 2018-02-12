import React, { Component } from 'react';
import logo from './logo.svg';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';
import ResultsView from './ResultsView';
import BattleView from './BattleView';
import RankingsView from './RankingsView'
import Header from './Header';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={BattleView} />
            <Route path="/results" component={ResultsView} />
            <Route path="/rankings" component={RankingsView} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
