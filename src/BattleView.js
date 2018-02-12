import React, { Component } from 'react';
import PlayerCard from './PlayerCard';
import { connect } from "react-redux";

class BattleView extends Component {

  

  render() {
    return (
      <div>
        <div className="row battleScreen">
          <div className="small-6 medium-6 large-6 columns">
            <PlayerCard playerNumber={1} />
          </div>
          <div className="small-6 medium-6 large-6 columns">
            <PlayerCard playerNumber={2} />
          </div>
        </div>
        {this.props.gitHubPlayer1 && this.props.gitHubPlayer2 && (
          <div className="battleButton">
            <button onClick={() => this.props.history.push("/results")} className="warning" style={{width: '100%'}}>BATTLE!</button>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    gitHubPlayer1: state.gitHubPlayer1,
    gitHubPlayer2: state.gitHubPlayer2
  };
};


export default connect(mapStateToProps)(BattleView)
