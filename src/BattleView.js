import React, { Component } from 'react';
import PlayerCard from './PlayerCard';

class BattleView extends Component {

  render() {
    return (
      <div>
        <div className="row battleScreen">
          <div className="small-6 medium-6 large-6 columns">
            <PlayerCard defaultPlayerName="Player 1"/>
          </div>
          <div className="small-6 medium-6 large-6 columns">
            <PlayerCard defaultPlayerName="Player 2"/>
          </div>
        </div>
      </div>
    )
  }
}

export default BattleView