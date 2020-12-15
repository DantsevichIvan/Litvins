import {matchesApi} from "../api/api";
import {addMatch, setLastMatch, setMatch, setMatches, setMessage, setNextMatch} from "../reducers/MatchsReducer";

export const getMatches = () => async (dispatch: any) => {
    const data = await matchesApi.getMatches()
    dispatch(setMatches(data))

}
export const getMatch = (matchId: any) => async (dispatch: any) => {
    const data = await matchesApi.getMatch(matchId)
    dispatch(setMatch(data))
}
export const AddMatch = (matchInfo: any) => async (dispatch: any) => {
    const data = await matchesApi.addMatch(matchInfo)
    dispatch(addMatch(data))
    dispatch(getMatches())
    dispatch(getNextMatch())
}
export const deleteMatch = (matchId: any) => async (dispatch: any) => {
    const data = await matchesApi.deleteMatch(matchId)
    console.log(data)
    // dispatch(deleteMatch(data))
    dispatch(getMatches())
}

export const addResultMatch = (result: any, matchID: any) => async (dispatch: any) => {
    const data = await matchesApi.addResultMatch(result, matchID)

// export const addResultMatch = (result: any) => async (dispatch: any) => {
//     const data = await matchesApi.addResultMatch(result)
    console.log(data)
    dispatch(getMatches())
}
export const getNextMatch = () => async (dispatch: any) => {
    const data = await matchesApi.getNextMatch()
    if (data === null) {
        dispatch(setMessage('Будующих мачей нету'))
    } else {
        dispatch(setNextMatch(data))
    }
}
export const getLastMatch = () => async (dispatch: any) => {
    const data = await matchesApi.getLastMatch()
    dispatch(setLastMatch(data))
}

// : any 12


// не соответствие передаваемых параметров  в файле AddResultMatch.tsx только 1 параметр передавали  dispatch(addResultMatch(formData))
// export const addResultMatch = (result: any, matchID: any) => async (dispatch: any) => {
//     const data = await matchesApi.addResultMatch(result, matchID)