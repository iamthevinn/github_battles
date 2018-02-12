import React, { Component } from 'react';
import { getGitHubUser } from './state/actions';
import { connect } from "react-redux";
import UserCardWrapped from './PlayerCard'
import { LOADED_USER_DATA, loadUsers } from './state/actions';

class RankingsView extends Component {

  componentDidMount() {
    this.props.loadUsers();
  }

  render() {

    let sortedUsers = this.props.rankedUsers.slice();
    sortedUsers.sort(function(a, b){ return b.score - a.score })

    return (
      <div>
        <div style={{ fontSize: '36px' }}>Rankings</div>
        {sortedUsers.map((user, index) => { console.log(user);return ( 
          <div key={user.githubID} className="card" style={{ width: '100%', float: 'left' }}>
            <div style={{ width: '5%', fontSize: '36px', display: 'inline-block', verticalAlign: 'top' }} >
              {index+1}.
            </div>
            <div style={{ width: '55%', display: 'inline-block', verticalAlign: 'top' }}>
              <UserCardWrapped playerNumber={user} />
            </div>
            <div style={{ paddingLeft: '20px', fontSize: '36px', width: '40%', display: 'inline-block', verticalAlign: 'top' }}>
              Score: {user.score}
            </div>
          </div>
        )}
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rankedUsers: state.rankedUsers
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: () => dispatch(loadUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RankingsView);
