import React, { Component } from 'react';
import { getGitHubUser } from './state/actions';
import { connect } from "react-redux";
import UserCardWrapped from './PlayerCard'
import { LOADED_USER_DATA, loadUsers } from './state/actions';

class RankingsView extends Component {

  componentDidMount() {
    console.log("Component Mounted")
    this.props.loadUsers();
  }

  render() {
    return (
      <div>
        <div style={{fontSize: '36px'}}>Rankings</div>
        {this.props.rankedUsers.length > 0 && (
          <div className="card" style={{width: '100%', float: 'left'}}>
            <div style={{width: '5%', fontSize: '36px', display: 'inline-block', verticalAlign: 'top'}} >
              {this.props.rankedUsers[0].id}
            </div>
            <div style={{width: '55%', display: 'inline-block', verticalAlign: 'top'}}>
            <UserCardWrapped playerNumber={1} />
            </div>
            <div style={{ paddingLeft: '20px', fontSize: '36px', width: '40%', display: 'inline-block', verticalAlign: 'top'}}>
              Score: {this.props.rankedUsers[0].score}
            </div>
          </div>
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
