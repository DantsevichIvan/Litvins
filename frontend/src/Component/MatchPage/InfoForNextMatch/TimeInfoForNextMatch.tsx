import React from 'react';
import styles from "./TimeInfoForNextMatch.module.css";
import cn from 'classnames'
import TimerComponent from "../../innerComponent/TimerComponent";
import InfoNextMatch from "./InfoNextMatch";
import {NextMatchType} from '../../../common/types'

interface TimeInfoForNextMatchProps{
    header?:boolean
    nextMatch:NextMatchType
}

export default function TimeInfoForNextMatch({header,nextMatch}:TimeInfoForNextMatchProps) {
    return (
        <div className={styles.wrapper}>
            <div className={cn({[styles.listItem]: header}, styles.container__singleNextMatch__listItem)}>
                <div className={cn({[styles.count]: header}, styles.container__singleNextMatch__listItem__count)}>
                    <div
                        className={cn({[styles.container]: header}, styles.container__singleNextMatch__listItem__count__container)}>
                        <TimerComponent nextMatch={nextMatch}/>
                    </div>
                </div>
            </div>
            <InfoNextMatch nextMatch={nextMatch} header={header} />
        </div>
    )
}



