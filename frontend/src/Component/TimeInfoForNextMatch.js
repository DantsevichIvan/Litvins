import React from 'react';
import styles from "../style/TimeInfoForNextMatch.module.css";
import cn from 'classnames'
import TimerComponent from "./innerComponent/TimerComponent";
import InfoNextMatch from "./MainComponent/InfoNextMatch";


export default function TimeInfoForNextMatch({header,nextMatch}) {
    return (
        <div className={styles.wrapper}>
            <div className={cn({[styles.listItem]: header}, styles.container__singleNextMatch__listItem)}>
                <div className={cn({[styles.count]: header}, styles.container__singleNextMatch__listItem__count)}>
                    <div
                        className={cn({[styles.container]: header}, styles.container__singleNextMatch__listItem__count__container)}>
                        <TimerComponent/>
                    </div>
                </div>
            </div>
            <InfoNextMatch nextMatch={nextMatch} header={header} />
        </div>
    )
}



