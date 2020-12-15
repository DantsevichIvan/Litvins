import React, { FC } from 'react';
import styles from './NextMatchs.module.css'
import moment from "moment";
import TimerComponent from "../../innerComponent/TimerComponent";
import HomeTitle from "../additionalComponent/HomeTitle";
import FrameHomePage from "../additionalComponent/FrameHomePage";
import {MatchType} from '../../../common/types';

type NextMatches = {
    nextMatch: MatchType
}

const NextMatches : FC<any>=({nextMatch}) =>{
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <FrameHomePage/>
                <HomeTitle value={'Следующий матч'}/>
                <div className={styles.aboutMatch}>
                    <div className={styles.aboutMatchInfo}>
                        <div className={styles.infoTeam}>
                            <span>
                                {nextMatch.game === 'home'? nextMatch.team: nextMatch.opposingTeam}
                            </span>
                        </div>
                        <div className={styles.versus}>
                            <span>Vs</span>
                        </div>
                        <div
                            className={styles.infoTeam}>
                            <span>
                                {nextMatch.game !== 'exit'? nextMatch.opposingTeam:nextMatch.team}
                            </span>
                        </div>
                    </div>
                    <div className={styles.infoDateAndLocation}>
                        <div className={styles.dateMatch}>
                            <span className={styles.dateMatchTitle}>Дата</span>
                            <span className={styles.value}>
                            {moment(nextMatch.dateTime).format('LL')}
                            </span>
                        </div>
                        <div className={styles.locationMatch}>
                            <span className={styles.locationMatchTitle}>Место</span>
                            <address className={styles.value}>
                                {nextMatch.location}
                            </address>
                        </div>
                        <div className={styles.time}>
                            <span className={styles.dateMatchTitle}>Время</span>
                            <span className={styles.value}>
                                {moment(nextMatch.dateTime).format('LT')}
                            </span>
                        </div>
                    </div>
                    <TimerComponent  nextMatch={nextMatch}/>
                </div>
            </div>
        </div>
    )
}

export default NextMatches
