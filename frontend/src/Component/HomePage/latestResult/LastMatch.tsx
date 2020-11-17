import React, {FC} from "react";
import styles from './LastMatch.module.css'
import {NavLink} from "react-router-dom";
import moment from "moment";
import {LastMatchType} from "../../../common/types";

type LatestResultMatchType = { match: LastMatchType }

const LastMatch: FC<LatestResultMatchType> = ({match}) => {
    return (
        <div className={styles.container}>
            <div className={styles.infoAboutMatch}>
                <div className={styles.infoTeam}>
                    <span>{match.game === 'home' ? match.team : match.opposingTeam}</span>
                    <span className={styles.vs}>VS</span>
                    <span>{match.game === 'home' ? match.opposingTeam : match.team}</span>
                </div>
                <div className={styles.infoMatch}>
                    <div>
                        <span>Исход</span>
                        <span>Победа</span>
                    </div>
                    <div>
                        <span>Дата</span>
                        <span>{moment(match.dateTime).format('LL')}</span>
                    </div>
                </div>
            </div>
            <div className={styles.count}>
                <span>{match.game === 'home' ? match.result.resultTeam : match.result.resultOpposingTeam}</span>
                <span className={styles.element}>:</span>
                <span>{match.game === 'home' ? match.result.resultOpposingTeam : match.result.resultTeam}</span>
            </div>
            <div className={styles.link}>
                <NavLink to={`/list-matches/match/` + match._id}>Подробнее</NavLink>
            </div>
        </div>
    )
}
export default LastMatch
