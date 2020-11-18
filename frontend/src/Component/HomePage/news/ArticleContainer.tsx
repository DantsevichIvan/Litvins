import React, { FC } from "react";
import styles from "./news.module.css";
import img1 from "../../../logo/853d071dfa2f869fbd2a70dbcb3a8f5e.jpg";
import {NavLink} from "react-router-dom";
import moment from 'moment'
import {NewsType} from "../../../common/types"

type CurrentNewsType = {news: NewsType}

const ArticleContainer:FC<CurrentNewsType> = ({news}) => {
    return (
        <div className={styles.wrapper__container__article}>
            <div className={styles.wrapper__container__article__imgWrap} style={{backgroundImage: `url(${img1})`}}>
            </div>
            <div className={styles.wrapper__container__article__info}>
                <div className={styles.wrapper__container__article__info__data}>
                    <span>{moment(news.dataValue).format("LL")}</span>
                </div>
                <div className={styles.wrapper__container__article__info__name}>
                    <h4>{news.nameNews}</h4>
                </div>
                <div className={styles.wrapper__container__article__info__text}>
                    <p>
                        {news.textNews}
                    </p>
                    <div className={styles.wrapper__container__article__info__text__readMore}>
                        <NavLink to={'/list-news/news/' + news._id}>Подробнее</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleContainer
