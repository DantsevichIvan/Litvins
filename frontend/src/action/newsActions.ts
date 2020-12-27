import {imageApi, newsApi} from "../api/api";
import {setCurrentPage, setListNews, setMessage, setNews, setTotalUsersCount} from "../reducers/NewsReducer";
import {OneNewsType} from '../Component/NewsPage/Form/NewsFormik';
import {successMessages} from '../Component/FormsControls/AuxiliaryFunction';

export const getListNews = (currentPage: number, pageSize: number) => async (dispatch: any) => {
  dispatch(setCurrentPage(currentPage))
  const data = await newsApi.getListNews(currentPage, pageSize)
  console.log('getListNews data ', data)
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

export type NewsResponseType = {
  config: any;
  data: { message: string, success: boolean }
  headers: any
  request?: any
  status: number
  statusText: string
}

export const addNewsThunk = (newsInfo: OneNewsType) => async (dispatch: any) => {
  const response: NewsResponseType = await newsApi.addNews(newsInfo)
  if (response.status === 201) {
    successMessages('Новость добавлена')
    dispatch(getListNews(1, 8))
  }
}

export const updateNewsThunk = (newsInfo: OneNewsType, updateNewsId: string) => async (dispatch: any) => {
  const response: NewsResponseType = await newsApi.updateNews(newsInfo, updateNewsId)
  console.log('updateNews response', response)
  if (response.status === 200) {
    successMessages('Новость обновлена')
    dispatch(getListNews(1, 8))
  }
}

export const deleteNewsThunk = (deleteNewsId: string) => async (dispatch: any) => {
  const response: NewsResponseType = await newsApi.deleteNews(deleteNewsId)
  console.log('deleteNews response', response)
  if (response.status === 200) {
    successMessages('Новость удалена')
    dispatch(getListNews(1, 8))
  }
}

export const fileUploadHandler = (fd: any) => async (dispatch: any) => {
  const data = await imageApi.uploadFile(fd)
}

// : any 7