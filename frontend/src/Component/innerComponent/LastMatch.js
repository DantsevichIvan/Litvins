import React from "react";
import styles from './../../style/LastMatch.module.css'
import {NavLink} from "react-router-dom";

export default function LastMatch({}) {
    return (
        <div className={styles.container}>
            <div className={styles.infoAboutMatch}>
                <div className={styles.infoTeam}>
                    <span>ЛИЦВИНЫ</span>
                    <span className={styles.vs}>VS</span>
                    <span>Equals</span>
                </div>
                <div className={styles.infoMatch}>
                    <div>
                        <span>Исход</span>
                        <span>Победа</span>
                    </div>
                    <div>
                        <span>Дата</span>
                        <span>12 декабря 2020</span>
                    </div>
                </div>
            </div>
            <div className={styles.count}>
                <span>3</span>
                <span className={styles.element}>:</span>
                <span>2</span>
            </div>
            <div className={styles.link}>
                <NavLink to={'#'}>Подробнее</NavLink>
            </div>
        </div>
    )
}
