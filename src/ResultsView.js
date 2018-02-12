import React, { Component } from 'react';
import { getGitHubUser } from './state/actions';
import { connect } from "react-redux";
import UserCardWrapped from './PlayerCard'
import { RESET_BATTLE } from './state/actions';

const ResultsView = (props) => {

  function calculateScore({ public_repos, followers }) {
    return (public_repos + followers) * 12;
  }

  function resetButtonClicked() {
    props.resetBattle();
    props.history.push("/")
  }

  const player1 = calculateScore(props.gitHubPlayer1)
  const player2 = calculateScore(props.gitHubPlayer2)

  let firstPlace = props.gitHubPlayer1;
  let secondPlace = props.gitHubPlayer2;
  let firstPlaceScore = player1;
  let secondPlaceScore = player2;

  if (player1 < player2) {
    firstPlace = props.gitHubPlayer2;
    firstPlaceScore = player2;
    secondPlace = props.gitHubPlayer1;
    secondPlaceScore = player1;
  }

  return (
    <div>
      <div className="row">
        <div className="small-6 medium-6 large-6 columns">
          <div className="firstPlaceText">
            <div>1st Place</div>
            <div>{firstPlace.name} (Score: {firstPlaceScore})</div>
          </div>
          <div className="secondPlaceText">
            <div>2nd Place</div>
            <div>{secondPlace.name} (Score: {secondPlaceScore})</div>
          </div>
        </div>
        <div className="small-6 medium-6 large-6 columns">
          <UserCardWrapped playerNumber={firstPlace === props.gitHubPlayer1 ? 1 : 2} />
        </div>
      </div>
      <div className="resetButton">
        <button onClick={() => resetButtonClicked()} className="buttonbutton">Reset</button>
      </div>
    </div>
  )
}



const mapStateToProps = state => {
  return {
    gitHubPlayer1: state.gitHubPlayer1,
    gitHubPlayer2: state.gitHubPlayer2
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetBattle: () => dispatch({ type: RESET_BATTLE })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsView);
