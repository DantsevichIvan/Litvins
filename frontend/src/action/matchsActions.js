import {matchesApi} from "../api/api";
import {addMatch, setLastMatch, setMatch, setMatches, setMessage, setNextMatch} from "../reducers/MatchsReducer";

export const getMatches = () => async (dispatch) => {
    const data = await matchesApi.getMatches()
    dispatch(setMatches(data))

}
export const getMatch = (matchId) => async (dispatch) => {
    const data = await matchesApi.getMatch(matchId)
    dispatch(setMatch(data))
}
export const AddMatch = (matchInfo) => async (dispatch) => {
    const data = await matchesApi.addMatch(matchInfo)
    dispatch(addMatch(data))
    dispatch(getMatches())
    dispatch(getNextMatch())
}
export const deleteMatch = (matchId) => async (dispatch) => {
    const data = await matchesApi.deleteMatch(matchId)
    console.log(data)
    // dispatch(deleteMatch(data))
    dispatch(getMatches())
}
export const addResultMatch = (result, matchID) => async (dispatch) => {
    const data = await matchesApi.addResultMatch(result, matchID)
    console.log(data)
    dispatch(getMatches())
}
export const getNextMatch = () => async (dispatch) => {
    const data = await matchesApi.getNextMatch()
    if (data === null) {
        dispatch(setMessage('Будующих мачей нету'))
    } else {
        dispatch(setNextMatch(data))
    }
}
export const getLastMatch = () => async (dispatch) => {
    const data = await matchesApi.getLastMatch()
    dispatch(setLastMatch(data))
}
