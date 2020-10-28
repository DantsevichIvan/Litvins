import React, {useEffect, useState} from 'react';
import HeaderContainer from "../innerComponent/HeaderContainer";
import styles from '../../style/ListMatch.module.css'
import AsideContainer from "./AsideContainer";
import InfoMatch from "./InfoMatch";
import {getMatches} from "../../redux/MatchsReducer";
import {useDispatch, useSelector} from "react-redux";
import Modal from "react-modal";
import AddNewMatch from "../FormsControls/AddNewMatch";
import {message} from 'antd';
import AddResultMatch from "../FormsControls/AddResultMatch";


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
        zIndex: 9,
        position: 'relative'
    }
};

export default function ListMatches() {
    const dispatch = useDispatch()
    const listMatches = useSelector(state => state.matchesPage.matches)
    const nextMatch = useSelector(state => state.matchesPage.nextMatch)
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalResultMatchIsOpen, setModalResultMatchIsOpen] = useState(false);
    const [playedMatch, setPlayedMatch] = useState({});

    useEffect(() => {
        dispatch(getMatches())
        // dispatch(getNextMatch())
    }, [])
    useEffect(()=>{
        checkMatches()
    },[listMatches])
    const checkMatches = () =>{
        const currentD = new Date();
        listMatches.forEach((match)=>{
            const checkDate = new Date(match.dateTime)
            if (currentD > checkDate && !match.score){
                setPlayedMatch(match)
                setModalResultMatchIsOpen(!modalResultMatchIsOpen)
            }
        })
    }
    const onAddMatchBtn = () => {
        setIsOpen(!modalIsOpen)
    }


    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <HeaderContainer
                    nextMatch={nextMatch}
                    title={'MATCH LIST'}
                    activeLink={'Список матчей'}
                    header={true}/>
            </div>
            <div className={styles.container}>
                <div className={styles.container__content}>
                    <AsideContainer/>
                    <div className={styles.content}>
                        <div className={styles.listMatch}>
                            {
                                listMatches.map((match) => {
                                    return <InfoMatch match={match} key={match._id}/>
                                })
                            }
                        </div>
                        <button onClick={onAddMatchBtn} className={styles.addMatch}>Add match</button>
                    </div>

                    <Modal isOpen={modalIsOpen}
                           style={customStyles}
                           ariaHideApp={false}
                           contentLabel="Example Modal"
                           className={styles.modal}>
                        <AddNewMatch
                            onAddMatchBtn={onAddMatchBtn}/>
                    </Modal>
                    <Modal isOpen={modalResultMatchIsOpen}
                           style={customStyles}
                           ariaHideApp={false}
                           contentLabel="Example Modal"
                           className={styles.modal}>
                        <AddResultMatch
                            playedMatch={playedMatch}
                            closeModal={setModalResultMatchIsOpen}
                            modal={modalResultMatchIsOpen}/>
                    </Modal>
                </div>
            </div>
        </div>

    )
}