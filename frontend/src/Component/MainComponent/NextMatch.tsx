import React, {FC} from 'react';
import styles from '../../style/NextMatchs.module.css'
import moment from "moment";
import TimerComponent from "../innerComponent/TimerComponent";
import HomeTitle from "../innerComponent/HomeTitle";
import FrameHomePage from "../innerComponent/FrameHomePage";
import {MatchType} from '../../common/types';

type NextMatchesType = {
  nextMatch: MatchType
}

const NextMatches: FC<NextMatchesType> = ({nextMatch}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <FrameHomePage/>
        <HomeTitle value={'Следующий матч'}/>
        <div className={styles.aboutMatch}>
          <div className={styles.aboutMatchInfo}>
            <div className={styles.infoTeam}>
                            <span>
                                Litvins
                              {/*{nextMatch.game === 'home'? nextMatch.team: nextMatch.opposingTeam}*/}
                            </span>
            </div>
            <div className={styles.versus}>
              <span>Vs</span>
            </div>
            <div
              className={styles.infoTeam}>
                            <span>
                                Barcelona
                              {/*{nextMatch.game !== 'exit'? nextMatch.opposingTeam:nextMatch.team}*/}
                            </span>
            </div>
          </div>
          <div className={styles.infoDateAndLocation}>
            <div className={styles.dateMatch}>
              <span className={styles.dateMatchTitle}>Дата</span>
              <span className={styles.value}>
                                12 декабря 2020
                {/*{moment(nextMatch.dateTime).format('LLL')}*/}
                            </span>
            </div>
            <div className={styles.locationMatch}>
              <span className={styles.locationMatchTitle}>Место</span>
              <address className={styles.value}>
                Радужная 8\3, СШ№180
                {/*{nextMatch.location}*/}
              </address>
            </div>
            <div className={styles.time}>
              <span className={styles.dateMatchTitle}>Время</span>
              <span className={styles.value}>
                                12.15
                {/*{moment(nextMatch.dateTime).format('LLL')}*/}
                            </span>
            </div>
          </div>
          <TimerComponent/>
        </div>
      </div>
    </div>
  )
}

export default NextMatches