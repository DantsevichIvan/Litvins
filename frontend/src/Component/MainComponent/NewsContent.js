import React from "react";
import styles from "../../style/NewsPage.module.css";
import {NavLink} from "react-router-dom";
import imgNews from '../../logo/35b8bf93115eb2b8da9f8b4f41fdb0fd.jpg'
import { faComments} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import moment from "moment";


export default function NewsContent({news}) {
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
                            <NavLink to={'/list-news/news/' + news._id} >{news.nameNews}</NavLink>
                        </h4>
                    </div>
                    <div className={styles.wrapper__container__content__cell__info__infoText__text}>
                        <p>
                            {news.textNews}
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.wrapper__container__content__cell__bottom}>
                <div  className={styles.wrapper__container__content__cell__bottom__count}>
                    <FontAwesomeIcon icon={faComments}/>
                    <span>3</span>
                </div>
                <div  className={styles.wrapper__container__content__cell__bottom__button}>
                    <NavLink to={'/list-news/news/' + news._id}>Read More</NavLink>
                </div>
            </div>
        </div>
    )
}