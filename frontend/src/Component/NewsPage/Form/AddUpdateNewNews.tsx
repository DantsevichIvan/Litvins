import {useDispatch} from "react-redux";
import styles from "./AddNewsForm.module.css";
import React from "react";
import {addNewsThunk, updateNewsThunk} from "../../../action/newsActions";
import {NewsFormik, OneNewsType} from "./NewsFormik";
import {NewsInfoType} from '../../../common/types';

export type AddNewNewsType = {
  openCloseModalWindow: () => void;
  news?: NewsInfoType
}

export default function AddUpdateNewNews({openCloseModalWindow, news}: AddNewNewsType) {
  const dispatch = useDispatch()

  const addOneNews = (oneNews: OneNewsType) => {
    dispatch(addNewsThunk(oneNews))
    openCloseModalWindow()
  }

  const updateOneNews = (oneNews: OneNewsType, newsId: string) => {
    dispatch(updateNewsThunk(oneNews, newsId))
    console.log('newsId ', newsId)
    openCloseModalWindow()
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <button onClick={openCloseModalWindow}>Close</button>
        <NewsFormik
          onSubmit={addOneNews}
          updateOneNews={updateOneNews}
          news={news}
        />
      </div>
    </div>
  )
}
