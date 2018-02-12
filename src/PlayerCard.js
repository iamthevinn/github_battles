import React, { Component } from 'react';

class PlayerCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: ""
    }
    this.handleUserNameChange = this.handleUserNameChange.bind(this)
  }

  handleUserNameChange(event) {
    this.setState({userName: event.target.value})
  }

  render() {
    return (
      <div className="card">
        <div className="cardHeader">
          <div>{this.props.defaultPlayerName}</div>
        </div>
        <div className="row">
          <div className="small-6 medium-6 large-6 columns">
            <div className="inputLabel">
              GitHub Username:
          </div>
          </div>
          <div className="small-5 medium-5 large-5 columns">
            <input onChange={this.handleUserNameChange} style={{ fontSize: '24px' }} type="text">
            </input>
          </div>
          <div className="small-5 medium-5 large-5 columns">
            <div></div>
          </div>
        </div>
        <div className="githubNameNotFound">
          GitHub username does not exist, try again.
        </div>
        <div className="getUserButton">
          <button disabled={!this.state.userName.trim().length} style={{ width: '100%' }} >Get User</button>
        </div>
      </div>
    )
  }
}

export default PlayerCard