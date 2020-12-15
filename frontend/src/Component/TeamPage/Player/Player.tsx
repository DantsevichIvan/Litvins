import React, {FC} from 'react';
import styles from './Player.module.css'
import {NavLink} from "react-router-dom";
import avatar from "./../../../logo/f401649c954a6ca111acf083eac616cf.jpg"
import {IndicatorPlayer} from "./IndicatorPlayer";
import {PlayerType} from "../../../common/types";


type PlayerResultType = { player: PlayerType}

const Player:FC<PlayerResultType> = ({player}) => {
    return (
        <div className={styles.playerArticle}>
            <div className={styles.number}>
                <span>{player.numberPlayer}</span>
            </div>
            <div className={styles.container}>
                <div className={styles.avatar}>
                    <img src={avatar} alt=""/>
                </div>
                <div className={styles.name}>
                    <NavLink to={'/team/player/' + player._id}>{player.name}</NavLink>
                    <span>Фамилия</span>
                </div>
                <div className={styles.position}>
                    <span>{player.position}</span>
                </div>
                <div className={styles.indicators}>
                    <IndicatorPlayer/>
                    <IndicatorPlayer/>
                    <IndicatorPlayer/>
                    <IndicatorPlayer/>
                    <IndicatorPlayer/>
                    <IndicatorPlayer/>
                </div>
            </div>
        </div>
    )
}

export default Player
