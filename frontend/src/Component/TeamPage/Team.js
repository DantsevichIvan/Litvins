import React, {useEffect, useState} from 'react';
import HeaderContainer from "../header/HeaderContainer";
import styles from './Team.module.css'
import Player from "./Player/Player";
import Button from "./ButtonComponentTeam";
import {useDispatch, useSelector} from "react-redux";
import {getPlayers, putFilterPlayers} from "../../action/teamActions";
import Paginator from "../innerComponent/Paginator";

const arrPlayers = [{numberPlayer: 46, name: 'Yura', position: 'Защитники', id: 20}]


export default function Team() {
    const [title, setTitle] = useState('Команда')
    const dispatch = useDispatch();
    const players = useSelector(state => state.teamPage.players)
    const currentPage = useSelector(state => state.teamPage.currentPage)
    const pageSize = useSelector(state => state.teamPage.pageSize)
    const totalPlayersCount = useSelector(state => state.teamPage.totalPlayersCount)

    useEffect(() => {
        dispatch(getPlayers(currentPage, pageSize))
    }, [dispatch,currentPage,pageSize])
    const filterPlayers = (e) => {
        let value = e.currentTarget.title
        dispatch(putFilterPlayers(value))
        setTitle(value)
    }
    const dispatchMethod = (pageNumber) => {
        dispatch(getPlayers(pageNumber, pageSize))
    }
    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <HeaderContainer title={'Team'} activeLink={'Команда'}/>
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
                        totalPlayersCount={totalPlayersCount}
                        onDispatchMethod={dispatchMethod}
                    />
                </div>

            </div>
        </div>
    )
}

