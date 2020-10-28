import {homeApi} from "../api/api";

const SET_ALL_INFO_HOME_PAGE = 'RECENTCOMMENTS::SET_ALL_INFO_HOME_PAGE'

const initState = {
    lastMatch:{
        team:'',
        opposingTeam:'',
        game:'',
        dateTime:0,
        score: true,
        location:'',
        id:'' ,
        result:{
            resultTeam:0,
            resultOpposingTeam:0
        }
    },
    listMatches:[],
    newsList:[],
    infoAboutClub:{
        text:'',
        trainers:[]
    },
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
               // lastMatch:{
               //     team: action.data.lastMatch.team,
               //     opposingTeam: action.data.lastMatch.opposingTeam,
               //     game: action.data.lastMatch.game,
               //     dateTime:action.data.lastMatch.dateTime,
               //     score: action.data.lastMatch.score,
               //     location: action.data.lastMatch.location,
               //     id:action.data.lastMatch._id ,
               //     result:{
               //         resultTeam:action.data.lastMatch.result.resultTeam,
               //         resultOpposingTeam:action.data.lastMatch.result.resultOpposingTeam
               //     }
               // },
               listMatches:[...action.data.matchList],
               newsList:[...action.data.newsList.pageOfItems],
               infoAboutClub: {
                   text:action.data.infoAboutClub.text,
                   trainers:[...action.data.infoAboutClub.trainers]
               },
               nextMatch:{
                   // team: action.data.nextMatch.team,
                   // opposingTeam: action.data.nextMatch.opposingTeam,
                   // game: action.data.nextMatch.game,
                   // dateTime:action.data.nextMatch.dateTime,
                   // score: action.data.nextMatch.score,
                   // location: action.data.nextMatch.location,
                   // id:action.data.nextMatch._id
               },
               statisticsPlayers:[...action.data.statisticsPlayers]
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
export const getInfoHomePage = () => async (dispatch) =>{
    const data = await homeApi.getInfoHomePage()
    dispatch(setAllInfoHomePage(data))
}
export default HomeReducer