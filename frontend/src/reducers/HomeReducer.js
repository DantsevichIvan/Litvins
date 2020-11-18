const SET_ALL_INFO_HOME_PAGE = 'RECENTCOMMENTS::SET_ALL_INFO_HOME_PAGE'

const initState = {
    lastMatches:[],
    listMatches:[],
    newsList:[],
    nextMatch:{
        team:'',
        opposingTeam:'',
        game:'',
        dateTime:0,
        score: false,
        location:'',
        id:''
    },
    statisticsPlayers:[]
}

const HomeReducer = (state=initState, action) => {
    switch (action.type) {
        case SET_ALL_INFO_HOME_PAGE:{
           return {
               ...state,
               lastMatches:[...action.data.lastMatches.pageOfItems],
               newsList:[...action.data.newsList.pageOfItems],
               nextMatch:{
                   team: action.data.nextMatch.team,
                   opposingTeam: action.data.nextMatch.opposingTeam,
                   game: action.data.nextMatch.game,
                   dateTime:action.data.nextMatch.dateTime,
                   score: action.data.nextMatch.score,
                   location: action.data.nextMatch.location,
                   id:action.data.nextMatch._id
               },
               statisticsPlayers:[...action.data.statisticsData]
           }
        }
        default:
            return {
                ...state
            }
    }
}
export const setAllInfoHomePage = (data) =>{
    return {
        type:SET_ALL_INFO_HOME_PAGE,
        data
    }
}
export default HomeReducer
