import React, {useEffect, useState} from 'react';
import HeaderContainer from "../innerComponent/HeaderContainer";
import styles from '../../style/NewsPage.module.css'
import NewsContent from "./NewsContent";
import PaginatorNews from "../innerComponent/Paginator";
import AsideContainer from "./AsideContainer";
import {useDispatch, useSelector} from "react-redux";
import {getListNews} from "../../redux/NewsReducer";
import Modal from "react-modal";
import AddNewNews from "../FormsControls/AddNewNews";

const customStyles = {
    content: {
        width: '700px',
        height: '300px',
        top: '55%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
        position: 'relative',
        opacity:1
    }
};
export default function NewsPage () {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const dispatch =useDispatch()
    const listNews = useSelector(state => state.newsPage.newsList)
    const currentPage = useSelector(state => state.newsPage.currentPage)
    const pageSize = useSelector(state => state.newsPage.pageSize)
    const totalPlayersCount = useSelector(state => state.newsPage.totalPlayersCount)
    const message = useSelector(state => state.newsPage.message)

    const getAllNews = () =>{
        dispatch(getListNews(1,9))
    }
    useEffect(()=>{
        getAllNews()
    },[])
    const dispatchMethod = (pageNumber) =>{
        dispatch(getListNews(pageNumber,pageSize))
    }
    const openCloseModalWindow = () =>{
        setModalIsOpen(!modalIsOpen)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <HeaderContainer title={'Новости'} activeLink={'Новости'}/>
            </div>
            <div className={styles.wrapper__container}>
                <div className={styles.wrapper__container__wrap}>
                    <AsideContainer/>
                    <div className={styles.wrapper__container__wrap__info}>
                        {!!message ? <div>{message}</div>:null}
                        <button onClick={openCloseModalWindow}>Add News</button>

                        <div className={styles.wrapper__container__content}>
                            {listNews.map(news => {
                                return <NewsContent news={news} key={news._id}/>
                            })}
                        </div>
                        <div className={styles.paginator}>
                            <PaginatorNews
                                currentPage={currentPage}
                                pageSize={pageSize}
                                totalPlayersCount={totalPlayersCount}
                                onDispatchMethod={dispatchMethod}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={modalIsOpen}
                   style={customStyles}
                   ariaHideApp={false}
                   contentLabel="Example Modal"
                   className={styles.modal}>
                <AddNewNews openCloseModalWindow={openCloseModalWindow}/>
            </Modal>
        </div>
    )
}