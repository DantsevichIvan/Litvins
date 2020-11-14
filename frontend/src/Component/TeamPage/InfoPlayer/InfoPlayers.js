import React, {useCallback, useEffect} from "react";
import styles from './InfoPlayer.module.css'
// import avatar from "../../logo/f401649c954a6ca111acf083eac616cf.jpg"
import SliderPlayers from "../../Sliders/SliderPlayers";
import {useDispatch, useSelector} from "react-redux";
import {getPlayer, getPlayers} from "../../../action/teamActions";
import {IndicatorStatistic} from "./IndicatorStatistic";
import {ContainerInfo} from "./ContainerInfo";
import {Progress} from "antd";
import moment from "moment";


export default function InfoPlayer(props) {
    const dispatch = useDispatch();
    const player = useSelector(state => state.teamPage.player)
    const players = useSelector(state => state.teamPage.players)

    const getInfoPlayer = useCallback(() => {
        try {
            dispatch(getPlayer(props.match.params.userId))

        } catch (e) {
            console.log("Error Server")
        }
    }, [props,dispatch])
    useEffect(() => {
        getInfoPlayer()
        dispatch(getPlayers(1, 15))
    }, [dispatch,getInfoPlayer])
    return (
        <div className={styles.wrap}>

            <div className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.headerContainer}>
                        <div className={styles.headerInfo}>
                            <div className={styles.headerInfoName}>
                                <span>{player.name}</span>
                                <span className={styles.lastName}>Данцевич</span>
                            </div>
                            <span className={styles.headerInfoPosition}>{player.position}</span>
                            <span className={styles.headerInfoNumber}>{player.numberPlayer}</span>
                            <div className={styles.headerInfoInner}>
                                <span>5</span>
                                <span>30</span>
                            </div>
                        </div>
                        {/*<div className={styles.avatar}>*/}
                        {/*    <img src={avatar} alt=""/>*/}
                        {/*</div>*/}
                        <div className={styles.avatar}>
                            avatar
                        </div>
                    </div>
                    <div className={styles.infoPlayer}>
                        <ContainerInfo value={moment(player.birthday).format('ll')} title={'Дата рождения'}/>
                        <ContainerInfo value={'180/72'} title={'Рост/Вес'}/>
                        <ContainerInfo value={`${player.statisticPlayer.matchesPlayed}`} title={'Матчей'}/>
                        <ContainerInfo value={`${player.statisticPlayer.goals}`} title={'Голов'}/>
                    </div>
                </div>
            </div>

            <div className={styles.statistic}>
                <div className={styles.container}>
                    <div className={styles.statisticContainer}>
                        <div className={styles.statistics}>
                            <span className={styles.statisticTitle}>Статистика</span>
                            <div className={styles.listStatistic}>
                                <IndicatorStatistic/>
                                <IndicatorStatistic/>
                                <IndicatorStatistic/>
                                <IndicatorStatistic/>
                                <IndicatorStatistic/>
                                <IndicatorStatistic/>
                            </div>
                        </div>
                        <div className={styles.rating}>
                            <span className={styles.statisticTitle}>Рейтинг</span>
                            <Progress type="circle" percent={player.rating} strokeColor={'#9F1B1B'}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.sliderContainer}>
                <div className={styles.container}>
                    <SliderPlayers players={players} title={'Другие игроки'}/>
                </div>
            </div>
        </div>
    )
}
