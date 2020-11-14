import {imageApi, newsApi} from "../api/api";
import {addNews, setCurrentPage, setListNews, setMessage, setNews, setTotalUsersCount} from "../reducers/NewsReducer";

export const getListNews = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setCurrentPage(currentPage))
    const data = await newsApi.getListNews(currentPage,pageSize)
    if (!data.newsList.pageOfItems.length){
        dispatch(setListNews(data.newsList.pageOfItems))
        dispatch(setMessage(data))
    }else {
        dispatch(setTotalUsersCount(data.newsList.pager.totalItems))
        dispatch(setListNews(data.newsList.pageOfItems))
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
