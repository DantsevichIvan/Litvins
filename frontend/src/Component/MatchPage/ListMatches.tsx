import React, {useEffect, useState} from 'react';
import HeaderContainer from "../Header/HeaderContainer";
import styles from './ListMatch.module.css'
import AsideContainer from "../Aside/AsideContainer";
import InfoMatch from "./InfoMatch";
import {getMatches, getNextMatch} from "../../action/matchsActions";
import {useDispatch, useSelector} from "react-redux";
import Modal from "react-modal";
import AddNewMatch from "./Form/AddNewMatch";
import AddResultMatch from "./Form/AddResultMatch";
import {StateType,MatchType} from '../../common/types'

interface  customStylesProps{
    content:object
}
const customStyles:customStylesProps = {
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


const ListMatches = () => {
    const dispatch = useDispatch()
    const listMatches = useSelector((state:StateType) => state.matchesPage.matches)
    const nextMatch = useSelector((state:StateType) => state.matchesPage.nextMatch)
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    const [modalResultMatchIsOpen, setModalResultMatchIsOpen] = useState<boolean>(false);
    const [playedMatch, setPlayedMatch] = useState({});

    useEffect(() => {
        dispatch(getMatches())
        dispatch(getNextMatch())
    }, [dispatch])
    useEffect(() => {
        checkMatches()
    }, [listMatches])

    const checkMatches = ():any => {
        const currentD = new Date();
        listMatches.forEach((match) => {
            const checkDate = new Date(match.dateTime)
            if (currentD > checkDate && !match.score) {
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
                    header={true}
                    link={''}
                    childrenLink={''}
                />
            </div>
            <div className={styles.container}>
                <div className={styles.container__content}>
                    <AsideContainer/>
                    <div className={styles.content}>
                        <div className={styles.listMatch}>
                            {
                                listMatches.map((match:MatchType) => {
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
                            modal={modalResultMatchIsOpen}/>
                    </Modal>
                </div>
            </div>
        </div>

    )
}


export default ListMatches
