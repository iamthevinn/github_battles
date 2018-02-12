import { REQUEST_GITHUB_USER, HANDLE_RESPONSE_FROM_GITHUB, RESET_BATTLE } from './actions';

const initialState = {
  gitHubPlayer1Status: "",
  gitHubPlayer2Status: "",
  gitHubPlayer1: undefined,
  gitHubPlayer2: undefined
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_GITHUB_USER:
      if (action.payload === 1)
        return { ...state, gitHubPlayer1Status: "loading" }
      else if (action.payload === 2)
        return { ...state, gitHubPlayer2Status: "loading" }

    case HANDLE_RESPONSE_FROM_GITHUB:
      if (action.payload.gitHubUser) {
        if (action.payload.playerNumber === 1)
          return { ...state, gitHubPlayer1Status: "loaded", gitHubPlayer1: action.payload.gitHubUser }
        else if (action.payload.playerNumber === 2)
          return { ...state, gitHubPlayer2Status: "loaded", gitHubPlayer2: action.payload.gitHubUser }
      }
      else {
        if (action.payload.playerNumber === 1)
          return { ...state, gitHubPlayer1Status: "failed", gitHubPlayer1: undefined }
        else if (action.payload.playerNumber === 2)
          return { ...state, gitHubPlayer2Status: "failed", gitHubPlayer2: undefined }
      }

    case RESET_BATTLE:
      return { ...state, gitHubPlayer1Status: "", gitHubPlayer2Status: "", gitHubPlayer1: undefined, gitHubPlayer2: undefined }

    default:
      return state;
  }
}

export default reducer;