export const SET_INFO_CLUB = 'RECENTCOMMENTS::SET_INFO_CLUB'
export const SET_INFO_YEAR = 'RECENTCOMMENTS::SET_INFO_YEAR'

const initState = {
  infoForClub: null,
  infoYear: [],
  listYears: []
}

const ClubReducer = (state = initState, action: any) => {
  switch (action.type) {
    case SET_INFO_CLUB: {
      return {
        ...state,
        listYears: [...action.data.newArr]
      }
    }
    case SET_INFO_YEAR: {
      return {
        ...state,
        listYears: [...action.data.newArr]
      }
    }
    default: {
      return {...state}
    }
  }
}

export const setInfoClub = (data: any) => {
  return {
    type: SET_INFO_CLUB,
    data
  }
}
export const setInfoYear = (data: any) => {
  return {
    type: SET_INFO_YEAR,
    data
  }
}

export default ClubReducer

// : any 3