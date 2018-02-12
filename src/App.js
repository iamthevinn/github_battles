import React, { Component } from 'react';
import logo from './logo.svg';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
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
        <div>
          <div className="row battleScreen">
            <div className="small-6 medium-6 large-6 columns">
              <div className="card">
                <div className="cardHeader">
                  <div>Player 1</div>
                </div>
                <div className="row">
                  <div className="small-6 medium-6 large-6 columns">
                    <div className="inputLabel">
                      GitHub Username:
                    </div>
                  </div>
                  <div className="small-5 medium-5 large-5 columns">
                    <input style={{ fontSize: '24px' }} type="text">
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
                  <button style={{ width: '100%' }} >Get User</button>
                </div>
              </div>
            </div>
            <div className="small-6 medium-6 large-6 columns">
              <div className="card">
                <div className="cardHeader">
                  <div>Player 2</div>
                </div>
                <div className="row">
                  <div className="small-6 medium-6 large-6 columns">
                    <div className="inputLabel">
                      GitHub Username:
                    </div>
                  </div>
                  <div className="small-5 medium-5 large-5 columns">
                    <input style={{ fontSize: '24px' }} type="text">
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
                  <button style={{ width: '100%' }} >Get User</button>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default App;
