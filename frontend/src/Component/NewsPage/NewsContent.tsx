import React, {useState} from "react";
import styles from "./NewsPage.module.css";
import {NavLink} from "react-router-dom";
import imgNews from '../../logo/35b8bf93115eb2b8da9f8b4f41fdb0fd.jpg'
import {faComments} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import moment from "moment";
import {NewsInfoType} from '../../common/types'
import AddUpdateNewNews from './Form/AddUpdateNewNews';
import Modal from 'react-modal';
import {customStyles} from './NewsPage';
import {deleteNewsThunk} from '../../action/newsActions';
import {useDispatch} from 'react-redux';


export type NewsContentProps = {
  news: NewsInfoType
}

const NewsContent = ({news}: NewsContentProps) => {
  const dispatch = useDispatch()
  const [updateNawsModalIsOpen, setModalIsOpen] = useState<boolean>(false)

  const deleteNews = () => {
    console.log('deleteNews ')
    dispatch(deleteNewsThunk(news._id))
    console.log('newsId ', news._id)
  }

  const openCloseModalWindow = () => {
    setModalIsOpen(!updateNawsModalIsOpen)
  }

  return (
    <div className={styles.wrapper__container__content__cell}>
      <div className={styles.wrapper__container__content__cell__info}>
        <div className={styles.wrapper__container__content__cell__info__img}>
          <NavLink to={'/list-news/list/news/' + news._id}>
            <div style={{backgroundImage: `url(${imgNews})`}}></div>
          </NavLink>
        </div>
        <div className={styles.wrapper__container__content__cell__info__infoText}>
          <div className={styles.wrapper__container__content__cell__info__infoText__date}>
            <span>{moment(news.dataValue).format('ll')}</span>
          </div>
          <div className={styles.wrapper__container__content__cell__info__infoText__name}>
            <h4>
              <NavLink to={'/list-news/news/' + news._id}>{news.nameNews}</NavLink>
            </h4>
          </div>
          <div className={styles.wrapper__container__content__cell__info__infoText__text}>
            <p>
              {news.textNews}
            </p>
          </div>
        </div>
      </div>
      <div>
        <button onClick={openCloseModalWindow}>Обновить новость</button>
        <button onClick={deleteNews}>Удалить новость</button>
      </div>
      <div className={styles.wrapper__container__content__cell__bottom}>
        <div className={styles.wrapper__container__content__cell__bottom__count}>
          <FontAwesomeIcon icon={faComments}/>
          <span>3</span>
        </div>
        <div className={styles.wrapper__container__content__cell__bottom__button}>
          <NavLink to={'/list-news/news/' + news._id}>Read More</NavLink>
        </div>
      </div>
      <Modal isOpen={updateNawsModalIsOpen}
             style={customStyles}
             ariaHideApp={false}
             contentLabel="Example Modal"
             className={styles.modal}>
        <AddUpdateNewNews openCloseModalWindow={openCloseModalWindow}
                          news={news}
        />
      </Modal>
    </div>
  )
}
export default NewsContent
