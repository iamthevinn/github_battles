import axios from "axios"

export const REQUEST_GITHUB_USER = "REQUEST_GITHUB_USER";
export const HANDLE_RESPONSE_FROM_GITHUB = "HANDLE_RESPONSE_FROM_GITHUB";

export function getGitHubUser(playerNumber, userName) {
    return (dispatch, getState, api) => {
        dispatch({ type: REQUEST_GITHUB_USER, payload: playerNumber })
        const promise = axios.get(api + userName);

        promise.then(({ data: user }) => {
            dispatch({ type: HANDLE_RESPONSE_FROM_GITHUB, payload: { playerNumber: playerNumber, gitHubUser: user }})
        }, () => { })
        promise.catch(({ data: user }) => {
            dispatch({ type: HANDLE_RESPONSE_FROM_GITHUB, payload: {playerNumber: playerNumber, gitHubUser: undefined}});
        })
    }
}