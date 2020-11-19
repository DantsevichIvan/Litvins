import {imageApi, newsApi} from "../api/api";
import {addNews, setCurrentPage, setListNews, setMessage, setNews, setTotalUsersCount} from "../reducers/NewsReducer";

export const getListNews = (currentPage: number, pageSize: number) => async (dispatch: any) => {
  dispatch(setCurrentPage(currentPage))
  const data = await newsApi.getListNews(currentPage, pageSize)
  if (!data.newsList.pageOfItems.length) {
    dispatch(setListNews(data.newsList.pageOfItems))
    dispatch(setMessage(data))
  } else {
    dispatch(setTotalUsersCount(data.newsList.pager.totalItems))
    dispatch(setListNews(data.newsList.pageOfItems))
  }

}
export const getNews = (newsId: any) => async (dispatch: any) => {
  const data = await newsApi.getNews(newsId)
  dispatch(setNews(data))
}
export const addNewsThunk = (newsInfo: any) => async (dispatch: any) => {
  const data = await newsApi.addNews(newsInfo)
  dispatch(addNews(data))
  dispatch(setListNews(data))
}
export const fileUploadHandler = (fd: any) => async (dispatch: any) => {
  const data = await imageApi.uploadFile(fd)
  console.log(data)
}

// : any 7