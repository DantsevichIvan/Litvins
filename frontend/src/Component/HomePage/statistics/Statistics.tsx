import React, {FC} from 'react';
import style from './Statistics.module.css'
import StatisticsPlayer from "./StatisticsPlayer";
import StatisticsTitleIcon from "./StatisticsTitleIcon";
import HomeTitle from "../additionalComponent/HomeTitle";
import LinkOtherPage from "../additionalComponent/LinkOtherPage";
import {StatisticsListType,StatisticsPlayerType} from "../../../common/types";


type StatisticsType = {statisticsPlayers: Array<StatisticsListType> }

const Statistics:FC<StatisticsType> = ({statisticsPlayers}) => {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <HomeTitle value={'Статистика'}/>
                <div className={style.container}>
                    {statisticsPlayers.map((categories: StatisticsListType) => {
                        return (
                            <div className={style.item} key={categories.id}>
                                <StatisticsTitleIcon title={categories.name}/>
                                {
                                    categories.listPlayers.map((player: StatisticsPlayerType) => {
                                        return <StatisticsPlayer player={player} key={player.id}/>
                                    })
                                }
                            </div>
                        )
                    })}
                </div>
                <LinkOtherPage link={'#'} title={'Статистика'}/>
            </div>
        </div>
    )
}

export default Statistics
