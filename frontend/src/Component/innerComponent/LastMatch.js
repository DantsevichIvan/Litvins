import React from "react";
import styles from './../../style/LastMatch.module.css'
import {NavLink} from "react-router-dom";

export default function LastMatch({match}) {
    return (
        <div className={styles.container}>
            <div className={styles.infoAboutMatch}>
                <div className={styles.infoTeam}>
                    <span>{match.team}</span>
                    <span className={styles.vs}>VS</span>
                    <span>{match.opposingTeam}</span>
                </div>
                <div className={styles.infoMatch}>
                    <div>
                        <span>Исход</span>
                        <span>Победа</span>
                    </div>
                    <div>
                        <span>Дата</span>
                        <span>{match.dateTime}</span>
                    </div>
                </div>
            </div>
            <div className={styles.count}>
                <span>{match.result.resultTeam}</span>
                <span className={styles.element}>:</span>
                <span>{match.result.resultOpposingTeam}</span>
            </div>
            <div className={styles.link}>
                <NavLink to={'#'}>Подробнее</NavLink>
            </div>
        </div>
    )
}
