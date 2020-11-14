export const SET_INFO_CLUB = 'RECENTCOMMENTS::SET_INFO_CLUB'
export const SET_INFO_YEAR = 'RECENTCOMMENTS::SET_INFO_YEAR'

const initState = {
    infoForClub: null,
    infoYear:[]
}

const ClubReducer = (state=initState, action)=>{
    switch (action.type) {
        case SET_INFO_CLUB: {
            return{
                ...state,
                infoForClub: action.data
            }
        }
        case SET_INFO_YEAR: {
            return{
                ...state,
                infoForClub: action.data
            }
        }
        default:{
            return {...state}
        }
    }
}

export const setInfoClub = (data) =>{
    return{
        type: SET_INFO_CLUB,
        data
    }
}
export const setInfoYear = (data) =>{
    return{
        type: SET_INFO_YEAR,
        data
    }
}

export default ClubReducer
