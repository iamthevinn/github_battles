import React, { Component } from 'react';
import BattleView from './BattleView';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

class Header extends Component {

  render() {
    return (
      <div className="headerLine">
        <div className="titleContainer">
          <div className="title">GitHub Battle</div>
        </div>
        <div className="navigationContainer">
          <div className="navigationLinks">
            <Link to={'/'} className="navigationLink">Battle</Link>
            <div className="navigationLink">|</div>
            <Link to={'/rankings'} className="navigationLink">Rankings</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header