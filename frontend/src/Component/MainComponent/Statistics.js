import React from 'react';
import style from '../../style/Statistics.module.css'
import StatisticsPlayer from "../innerComponent/StatisticsPlayer";
import StatisticsTitleIcon from "../innerComponent/StatisticsTitleIcon";
import HomeTitle from "../innerComponent/HomeTitle";
import LinkOtherPage from "../innerComponent/LinkOtherPage";


export default function Statistics({statisticsPlayers}) {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <HomeTitle value={'Статистика'}/>
                <div className={style.container}>
                    {statisticsPlayers.map((categories) => {
                        return (
                            <div className={style.item} key={categories.id}>
                                <StatisticsTitleIcon title={categories.name}/>
                                {
                                    categories.listPlayers.map((player) => {
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
