import React, {useCallback, useEffect} from 'react'
import HeaderContainer from "../header/HeaderContainer";
import styles from './InfoNews.module.css'
import SliderNewsContent from "../Sliders/SliderNewsContent";
import SliderListNews from "../Sliders/SliderListNews";
import AsideContainer from "../Aside/AsideContainer";
import {useDispatch, useSelector} from "react-redux";
import {getListNews, getNews} from "../../action/newsActions";


export default function InfoNews(props){
    const dispatch = useDispatch();
    const news = useSelector(state => state.newsPage.news)
    const newsList = useSelector(state => state.newsPage.newsList)

    const getInfoNews = useCallback(() => {
        try {
            dispatch(getNews(props.match.params.newsId))
            dispatch(getListNews(1, 15))
        } catch (e) {
            console.log("Error Server")
        }
    },[dispatch, props])

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
                            {/*<div className={styles.wrapper__container__content__commentsWrap}>*/}
                            {/*    <div className={styles.wrapper__container__content__commentsWrap__content}>*/}
                            {/*        <h3>Comments: <span>3</span></h3>*/}
                            {/*        <div>*/}

                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div>*/}
                            {/*        <h3></h3>*/}
                            {/*        <form action=""></form>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        )
}
