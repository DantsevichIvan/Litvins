import {matchesApi} from "../api/api";

export const SET_MATCHES = 'RECENTCOMMENTS::SET_MATCHES'
export const SET_MATCH = 'RECENTCOMMENTS::SET_MATCH'
export const ADD_MATCH = 'RECENTCOMMENTS::ADD_MATCH'
export const SET_NEXT_MATCH = 'RECENTCOMMENTS::SET_NEXT_MATCH'
export const SET_LAST_MATCH = 'RECENTCOMMENTS::SET_LAST_MATCH'
export const DELETE_MATCH = 'RECENTCOMMENTS::DELETE_MATCH'
export const SET_MESSAGE = 'RECENTCOMMENTS::SET_MESSAGE'

const initState = {
    matches: [],
    match: {
        team: '',
        opposingTeam: '',
        game: '',
        dateTime: 0,
        score: null,
        location: '',
        id: ''
    },
    nextMatch: {
        team: '',
        opposingTeam: '',
        game: '',
        dateTime: 0,
        score: false,
        location: '',
        id: '',
        value: true
    },
    lastMatch: {
        team: '',
        opposingTeam: '',
        game: '',
        dateTime: 0,
        score: true,
        location: '',
        id: '',
        result: {
            resultTeam: 0,
            resultOpposingTeam: 0
        }
    },
    message: ''
}

const MatchesReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_MATCHES: {
            debugger
            return {
                ...state,
                matches: [...action.data.matches]
            }
        }
        case SET_MATCH: {
            return {
                ...state,
                match: {
                    team: action.match.team,
                    opposingTeam: action.match.opposingTeam,
                    game: action.match.game,
                    dateTime: action.match.dateTime,
                    score: action.match.score,
                    location: action.match.location,
                    id: action.match._id,
                }
            }
        }
        case SET_NEXT_MATCH: {
            debugger
            return {
                ...state,
                nextMatch: {
                    team: action.match.team,
                    opposingTeam: action.match.opposingTeam,
                    game: action.match.game,
                    dateTime: action.match.dateTime,
                    score: action.match.score,
                    location: action.match.location,
                    id: action.match._id,
                }
            }
        }
        case SET_LAST_MATCH: {
            return {
                ...state,
                lastMatch: {
                    team: action.match.team,
                    opposingTeam: action.match.opposingTeam,
                    game: action.match.game,
                    dateTime: action.match.dateTime,
                    score: action.match.score,
                    location: action.match.location,
                    id: action.match._id,
                    result: {
                        resultTeam: action.match.result.resultTeam,
                        resultOpposingTeam: action.match.result.resultOpposingTeam,
                    }
                }
            }
        }
        case ADD_MATCH: {
            return {
                ...state,
                message: action.data
            }
        }
        case SET_MESSAGE: {
            return {
                ...state,
                message: action.data,
                nextMatch: {
                    ...state.nextMatch,
                    value: false
                }
            }
        }
        default:
            return {
                ...state
            }
    }
}

export const setMatches = (data) => {
    return {
        type: SET_MATCHES,
        data
    }
}
export const setMatch = (match) => {
    return {
        type: SET_MATCH,
        match
    }
}
export const setNextMatch = (match) => {
    return {
        type: SET_NEXT_MATCH,
        match
    }
}
export const setLastMatch = (match) => {
    return {
        type: SET_LAST_MATCH,
        match
    }
}
export const addMatch = (data) => {
    return {
        type: ADD_MATCH,
        data
    }
}
export const setMessage = data => {
    return{
        type: SET_MESSAGE,
        data
    }
}
// export const deleteMatch = (data) =>{
//     return {
//         type:DELETE_MATCH,
//         data
//     }
// }

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

export default MatchesReducer
