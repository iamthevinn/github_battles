import React, { Component } from 'react';
import { getGitHubUser } from './state/actions';
import { connect } from "react-redux";

class InputCard extends Component {

  render() {
    return (
      <div className="card">

        <div className="cardHeader">
          <div>Player {this.props.playerNumber}</div>
        </div>
        <div className="row">
          <div className="small-6 medium-6 large-6 columns">
            <div className="inputLabel">
              GitHub Username:
          </div>
          </div>
          <div className="small-5 medium-5 large-5 columns">
            <input onChange={this.props.handleUserNameChange} style={{ fontSize: '24px' }} type="text">
            </input>
          </div>
          <div className="small-5 medium-5 large-5 columns">
            <div></div>
          </div>
        </div>
        {
          ((this.props.playerNumber === 1 && this.props.gitHubPlayer1Status === "failed") ||
            (this.props.playerNumber === 2 && this.props.gitHubPlayer2Status === "failed")) ?
            (
              <div className="githubNameNotFound">
                GitHub username does not exist, try again.
          </div>
            ) :
            (
              <div className="githubNameNotFound">
                &nbsp;
          </div>
            )
        }
        <div className="getUserButton">
          <button onClick={() => this.props.getGitHubUser(this.props.playerNumber, this.props.userName)} disabled={!this.props.userName.trim().length} style={{ width: '100%' }} >Get User</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    gitHubPlayer1Status: state.gitHubPlayer1Status,
    gitHubPlayer2Status: state.gitHubPlayer2Status,
    gitHubPlayer1: state.gitHubPlayer1,
    gitHubPlayer2: state.gitHubPlayer2
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getGitHubUser: (playerNumber, userName) => dispatch(
      getGitHubUser(playerNumber, userName)
    )
  };
}

const InputCardWrapped = connect(mapStateToProps, mapDispatchToProps)(InputCard);

class PlayerCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: ""
    }
    this.handleUserNameChange = this.handleUserNameChange.bind(this)
  }

  handleUserNameChange(event) {
    this.setState({ userName: event.target.value })
  }

  render() {

    console.log(this.props.playerNumber)

    return (
      <div>
        {((this.props.playerNumber === 1 && !this.props.gitHubPlayer1) || (this.props.playerNumber === 2 && !this.props.gitHubPlayer2)) && (
          <InputCardWrapped playerNumber={this.props.playerNumber} userName={this.state.userName} handleUserNameChange={this.handleUserNameChange} />
        )}
      </div>
    )
  }
}


const mapStateToPlayerCardProps = state => {
  return {
    gitHubPlayer1: state.gitHubPlayer1,
    gitHubPlayer2: state.gitHubPlayer2
  };
};


export default connect(mapStateToPlayerCardProps)(PlayerCard)
