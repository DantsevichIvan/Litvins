import {imageApi, newsApi} from "../api/api";


export const SET_LIST_NEWS = 'RECENTCOMMENTS::SET_LIST_NEWS'
export const SET_NEWS = 'RECENTCOMMENTS::SET_NEWS'
export const SET_CURRENT_PAGE = 'RECENTCOMMENTS::SET_CURRENT_PAGE'
export const SET_TOTAL_NEWS_COUNT = 'RECENTCOMMENTS::SET_TOTAL_USERS_COUNT'
export const ADD_NEWS = 'RECENTCOMMENTS::ADD_NEWS'
export const SET_MESSAGE = 'RECENTCOMMENTS::SET_MESSAGE'

const initState = {
    newsList: [],
    pageSize:9,
    currentPage:1,
    totalPlayersCount: 0,
    news:{
        dataValue: '',
        nameNews: '',
        textNews:''
    },
    message: '',
    messageAdd:''
}

const NewsReducer = (state=initState, action) => {
    switch (action.type) {
        case SET_LIST_NEWS: {
            // debugger
            return{
                ...state,
                newsList:[...action.data],
            }
        }
        case SET_NEWS: {
            return{
                ...state,
                news: action.data
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_NEWS_COUNT: {
            return {
                ...state,
                totalPlayersCount: action.count
            }
        }
        case ADD_NEWS:{
            return {
                ...state,
                messageAdd:action.data
            }
        }
        case SET_MESSAGE:{
            return {
                ...state,
                message: action.data.message
            }
        }
        default:
            return {
                ...state
            }
    }
}

export const setListNews = (data) =>{
    return {
        type:SET_LIST_NEWS,
        data
    }
}
export const setNews = (data) =>{
    return {
        type:SET_NEWS,
        data
    }
}
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
};
export const setTotalUsersCount = (totalUserCount) => {
    return {
        type: SET_TOTAL_NEWS_COUNT,
        count: totalUserCount
    }
};
export const addNews = (data) => {
    return {
        type: ADD_NEWS,
        data
    }
};
export const setMessage = (data) => {
    return {
        type: SET_MESSAGE,
        data
    }
};


export const getListNews = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setCurrentPage(currentPage))
    const data = await newsApi.getListNews(currentPage,pageSize)
    if (!data.pageOfItems.length){
        dispatch(setListNews(data.pageOfItems))
        dispatch(setMessage(data))
    }else {
        dispatch(setTotalUsersCount(data.pager.totalItems))
        dispatch(setListNews(data.pageOfItems))
    }

}
export const getNews = (newsId) => async (dispatch) =>{
    const data = await newsApi.getNews(newsId)
    dispatch(setNews(data))
}
export const addNewsThunk = (newsInfo) => async (dispatch) =>{
    const data = await newsApi.addNews(newsInfo)
    dispatch(addNews(data))
    dispatch(setListNews(data))
}
export const fileUploadHandler = (fd) => async (dispatch) =>{
    debugger
    const data = await imageApi.uploadFile(fd)
    console.log(data)
}

export default NewsReducer