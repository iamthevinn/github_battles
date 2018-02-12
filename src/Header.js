import React, { Component } from 'react';
import BattleView from './BattleView';

class Header extends Component {

  render() {
    return (
      <div className="headerLine">
        <div className="titleContainer">
          <div className="title">GitHub Battle</div>
        </div>
        <div className="navigationContainer">
          <div className="navigationLinks">
            <div className="navigationLink">Battle</div>
            <div className="navigationLink">|</div>
            <div className="navigationLink">Rankings</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header