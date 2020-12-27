import React, {FC, useCallback, useEffect} from 'react'
import HeaderContainer from "../Header/HeaderContainer";
import styles from './InfoNews.module.css'
import {SliderNewsContent} from "../Sliders/SliderNewsContent";
import {SliderListNews} from "../Sliders/SliderListNews";
import AsideContainer from "../Aside/AsideContainer";
import {useDispatch, useSelector} from "react-redux";
import {getListNews, getNews} from "../../action/newsActions";
import {StateType, NewsInfoType} from '../../common/types'


const InfoNews:FC<NewsInfoType> = (props: any) => {
    const dispatch = useDispatch();
    const news = useSelector((state: StateType) => state.newsPage.news)
    const newsList = useSelector((state: StateType) => state.newsPage.newsList)

    const getInfoNews = useCallback(() => {
        try {
            dispatch(getNews(props.match.params.newsId))
            dispatch(getListNews(1, 15))
        } catch (e) {
            console.log("Error Server")
        }
    }, [dispatch, props])

    useEffect(() => {

        getInfoNews()
    }, [getInfoNews])

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <HeaderContainer title={news.nameNews} activeLink={'Новости'} link={'list-news'}
                                 childrenLink={news.nameNews}/>
            </div>
            <div className={styles.wrapper__container}>
                <AsideContainer/>
                <div className={styles.wrapper__container_wrap}>
                    <div className={styles.wrapper__container__content}>
                        <SliderNewsContent/>
                        <div className={styles.wrapper__container__content__infoText}>
                            <p>
                                {news.textNews}
                            </p>
                        </div>
                        <div className={styles.wrapper__container__content__slider}>
                            <SliderListNews newsList={newsList}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoNews
