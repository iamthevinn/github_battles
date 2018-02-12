import axios from "axios"

export const REQUEST_GITHUB_USER = "REQUEST_GITHUB_USER";
export const HANDLE_RESPONSE_FROM_GITHUB = "HANDLE_RESPONSE_FROM_GITHUB";
export const RESET_BATTLE = "RESET_BATTLE"
export const LOADED_USER_DATA = "LOAD_USER_DATA"
export const ADD_USER = "ADD_USER"

export function getGitHubUser(playerNumber, userName) {
  return (dispatch, getState, api) => {
    dispatch({ type: REQUEST_GITHUB_USER, payload: playerNumber })
    const promise = axios.get(api + userName);

    promise.then(({ data: user }) => {
      dispatch({ type: HANDLE_RESPONSE_FROM_GITHUB, payload: { playerNumber: playerNumber, gitHubUser: user } })
    }, () => { })
    promise.catch(({ data: user }) => {
      dispatch({ type: HANDLE_RESPONSE_FROM_GITHUB, payload: { playerNumber: playerNumber, gitHubUser: undefined } });
    })
  }
}

export function loadUsers() {
  return (dispatch, getState, api) => {
    axios.get('http://5a8205cc2f37a900124ecc98.mockapi.io/github_users/')
      .then(({ data: users }) => {
        dispatch({ type: LOADED_USER_DATA, payload: users })
      })
  }
}

export function addUsers(player1, player2) {
  return (dispatch, getState, api) => {
    axios.post('http://5a8205cc2f37a900124ecc98.mockapi.io/github_users', player1)
      .then(({ data: users }) => {
        console.log(users)
        dispatch({ type: ADD_USER, payload: users })
      })

    axios.post('http://5a8205cc2f37a900124ecc98.mockapi.io/github_users', player2)
      .then(({ data: users }) => {
        console.log(users)
        dispatch({ type: ADD_USER, payload: users })
      })
  }
}