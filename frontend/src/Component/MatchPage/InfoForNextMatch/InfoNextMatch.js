import React from "react";
import styles from "./TimeInfoForNextMatch.module.css";
import cn from "classnames";
import moment from "moment";


export default function InfoNextMatch ({header,nextMatch}) {
    return(
        <div className={styles.container__singleNextMatch__listItem__aboutMatch}>
            <div className={styles.container__singleNextMatch__listItem__aboutMatch__info}>
                <div
                    className={cn({[styles.teamName]: header}, styles.container__singleNextMatch__listItem__aboutMatch__info__teamName)}>
                    <span>{nextMatch.game === 'home'? nextMatch.team: nextMatch.opposingTeam}</span>
                </div>
                <div className={styles.container__singleNextMatch__listItem__aboutMatch__info__versus}>
                    <span>Vs</span>
                </div>
                <div
                    className={cn({[styles.teamName]: header}, styles.container__singleNextMatch__listItem__aboutMatch__info__teamName)}>
                    <span>{nextMatch.game !== 'exit'? nextMatch.opposingTeam:nextMatch.team}</span>
                </div>
            </div>
            <div
                className={cn({[styles.infoDate]: header}, styles.container__singleNextMatch__listItem__aboutMatch__infoDate)}>
                <span>{moment(nextMatch.dateTime).format('LLL')}</span>
            </div>
            <div
                className={cn({[styles.infoLocation]: header}, styles.container__singleNextMatch__listItem__aboutMatch__infoLocation)}>
                <address>{nextMatch.location}</address>
            </div>
        </div>
    )
}
