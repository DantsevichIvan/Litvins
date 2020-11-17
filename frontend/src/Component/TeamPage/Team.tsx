import React, {FC, useEffect, useState} from 'react';
import HeaderContainer from "../header/HeaderContainer";
import styles from './Team.module.css'
import Player from "./Player/Player";
import Button from "./ButtonComponentTeam";
import {useDispatch, useSelector} from "react-redux";
import {getPlayers, putFilterPlayers} from "../../action/teamActions";
import Paginator from "../innerComponent/Paginator";
import {StateType,TeamPageType} from '../../common/types';

const arrPlayers = [
    {
        numberPlayer: 46,
        name: 'Yura',
        position: 'Защитники',
        id: '20',
        lastName: 'Dantsevich',
        birthday: '12/01/1997',
        email: '',
        rating: 70,
        statisticPlayer: {
            matchesPlayed: 0,
            goals: 0,
            assist: 0,
            bombardier: 0
        },
        _id:'214fds2'
    }]


const Team:FC<TeamPageType> = () =>{
    const [title, setTitle] = useState('Команда')
    const dispatch = useDispatch();
    const players = useSelector((state:StateType) => state.teamPage.players)
    const currentPage = useSelector((state:StateType) => state.teamPage.currentPage)
    const pageSize = useSelector((state:StateType) => state.teamPage.pageSize)
    const totalPlayersCount = useSelector((state:StateType) => state.teamPage.totalPlayersCount)

    useEffect(() => {
        dispatch(getPlayers(currentPage, pageSize))
    }, [dispatch,currentPage,pageSize])

    const filterPlayers = (event:any) => {
        let value = event.currentTarget.title
        dispatch(putFilterPlayers(value))
        setTitle(value)
    }
    const dispatchMethod = (currentPage:number) => {
        dispatch(getPlayers(currentPage, pageSize))
    }

    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <HeaderContainer
                        nextMatch={{value:null}}
                        childrenLink={false}
                        header={false}
                        link={''}
                        title={'Team'}
                        activeLink={'Команда'}/>
                </div>
                <div className={styles.content}>
                    <div className={styles.container}>
                        {/*<Button title={'All'} method={filterPlayers}/>*/}
                        <Button title={'Защитники'} method={filterPlayers}/>
                        <Button title={'Полузащитники'} method={filterPlayers}/>
                        <Button title={'Вратари'} method={filterPlayers}/>
                        <Button title={'Нападающие'} method={filterPlayers}/>
                    </div>
                    <div className={styles.title}>
                        <span>{title}</span>
                    </div>
                    <div className={styles.listPlayers}>
                        <div className={styles.containerCenter}>
                            {players.length !== 0 ? players.map((player) => {
                                return <Player key={player._id} player={player}/>
                            }) : arrPlayers.map((player) => {
                                return <Player key={player.id} player={player}/>
                            })}
                        </div>
                    </div>
                    <Paginator
                        currentPage={currentPage}
                        pageSize={pageSize}
                        portionSize={4}
                        totalPlayersCount={totalPlayersCount}
                        onDispatchMethod={dispatchMethod}
                    />
                </div>

            </div>
        </div>
    )
}
export default Team
