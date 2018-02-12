import React, { Component } from 'react';
import PlayerCard from './PlayerCard';
import { connect } from "react-redux";
import { addUsers } from "./state/actions"

class BattleView extends Component {

  calculateScore({ public_repos, followers }) {
    return (public_repos + followers) * 12;
  }

  addPlayers(player1, player2) {
    const user1 = { githubID: player1.id, name: player1.name, avatar_url: player1.avatar_url, score: this.calculateScore(player1) }
    const user2 = { githubID: player2.id, name: player2.name, avatar_url: player2.avatar_url, score: this.calculateScore(player2) }
    this.props.addUsers(user1, user2)
    this.props.history.push("/results")
  }

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
            <button onClick={() => this.addPlayers(this.props.gitHubPlayer1, this.props.gitHubPlayer2)} className="warning" style={{ width: '100%' }}>BATTLE!</button>
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

const mapDispatchToProps = dispatch => {
  return {
    addUsers: (player1, player2) => (
      dispatch(addUsers(player1, player2))
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BattleView)
