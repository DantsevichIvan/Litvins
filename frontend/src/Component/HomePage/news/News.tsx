import React from 'react';
import styles from './news.module.css';
import ArticleContainer from "./ArticleContainer";
import HomeTitle from "../HomeTitle";
import LinkOtherPage from "../LinkOtherPage";

export default function News({newsList}: any) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <HomeTitle value={'Новости'}/>
                <div className={styles.wrapper__container}>
                    <div className={styles.wrapper__container__center}>
                        {
                            newsList.map((news: any)=>{
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
