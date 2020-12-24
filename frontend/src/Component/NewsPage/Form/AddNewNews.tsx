import {useDispatch} from "react-redux";
import {successMessages} from "../../FormsControls/AuxiliaryFunction";
import styles from "./AddNewsForm.module.css";
import React from "react";
import {addNewsThunk} from "../../../action/newsActions";
import {NewsFormik, OneNewsType} from "./NewsFormik";

export type AddNewNewsType = {
  openCloseModalWindow: ()=> void
}

export default function AddNewNews({openCloseModalWindow}: AddNewNewsType) {
  const dispatch = useDispatch()

  const onSubmit = (oneNews: OneNewsType) => {
    dispatch(addNewsThunk(oneNews))
    successMessages('Новость добавлена')
    openCloseModalWindow()
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <button onClick={openCloseModalWindow}>Close</button>
        <NewsFormik
          onSubmit={onSubmit}
        />
      </div>
    </div>
  )
}
