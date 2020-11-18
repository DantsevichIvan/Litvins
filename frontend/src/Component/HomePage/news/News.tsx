import React, {FC} from 'react';
import styles from './news.module.css';
import ArticleContainer from "./ArticleContainer";
import HomeTitle from "../additionalComponent/HomeTitle";
import LinkOtherPage from "../additionalComponent/LinkOtherPage";
import {NewsType} from "../../../common/types"

type NewsResultType = { newsList: Array<NewsType> }

const News: FC<NewsResultType> = ({newsList}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <HomeTitle value={'Новости'}/>
                <div className={styles.wrapper__container}>
                    <div className={styles.wrapper__container__center}>
                        {
                            newsList.map((news: any) => {
                                return <ArticleContainer news={news} key={news._id}/>
                            })
                        }
                    </div>
                    <LinkOtherPage link={'list-news'} title={'Все новости'}/>
                </div>
            </div>
        </div>
    )
}
export default News
