import React from 'react';
import style from './Statistics.module.css'
import StatisticsPlayer from "./StatisticsPlayer";
import StatisticsTitleIcon from "./StatisticsTitleIcon";
import HomeTitle from "../HomeTitle";
import LinkOtherPage from "../LinkOtherPage";


export default function Statistics({statisticsPlayers}:any) {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <HomeTitle value={'Статистика'}/>
                <div className={style.container}>
                    {statisticsPlayers.map((categories: any) => {
                        return (
                            <div className={style.item} key={categories.id}>
                                <StatisticsTitleIcon title={categories.name}/>
                                {
                                    categories.listPlayers.map((player: any) => {
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
