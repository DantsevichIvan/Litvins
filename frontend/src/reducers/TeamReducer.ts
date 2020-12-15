export const SET_PLAYERS = 'RECENTCOMMENTS::SET_PLAYERS'
export const SET_PLAYER = 'RECENTCOMMENTS::SET_PLAYER'
export const SET_CURRENT_PAGE = 'RECENTCOMMENTS::SET_CURRENT_PAGE'
export const SET_TOTAL_USERS_COUNT = 'RECENTCOMMENTS::SET_TOTAL_USERS_COUNT'
export const SET_FILTER_PLAYERS = 'RECENTCOMMENTS::SET_FILTER_PLAYERS'

const initState = {
  players: [],
  pageSize: 8,
  currentPage: 1,
  totalPlayersCount: 0,
  player: {
    birthday: '',
    name: '',
    email: '',
    position: '',
    rating: 0,
    statisticPlayer: {
      matchesPlayed: 0,
      goals: 0,
      bombardier: 0
    }
  }
}

const TeamReducer = (state = initState, action: any) => {
  switch (action.type) {
    case SET_PLAYERS: {
      return {
        ...state,
        players: [...action.players]
      }
    }
    case SET_PLAYER: {
      return {
        ...state,
        player: {
          birthday: action.data.player.birthday,
          name: action.data.player.name,
          email: action.data.player.email,
          position: action.data.player.position,
          rating: action.data.player.rating,
          statisticPlayer: {
            matchesPlayed: action.data.player.statisticPlayer.matchesPlayed,
            goals: action.data.player.statisticPlayer.goals,
            bombardier: action.data.player.statisticPlayer.bombardier
          }
        }
      }
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage
      }
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalPlayersCount: action.count
      }
    }
    case SET_FILTER_PLAYERS: {
      return {
        ...state,
        players: [...action.players]
      }
    }
    default:
      return {
        ...state
      }
  }
}

export const setPlayers = (players: any) => {
  return {
    type: SET_PLAYERS,
    players
  }
}
export const setPlayer = (data: any) => {
  return {
    type: SET_PLAYER,
    data
  }
}
export const setCurrentPage = (currentPage: any) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  }
};
export const setTotalUsersCount = (totalUserCount: number) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    count: totalUserCount
  }
};
export const setFilterPlayers = (players: any) => {
  return {
    type: SET_FILTER_PLAYERS,
    players
  }
}

export default TeamReducer

// : any 5