import React, {useEffect, useState} from 'react';
import HeaderContainer from "../innerComponent/HeaderContainer";
import styles from '../../style/Team.module.css'
import Player from "../innerComponent/Player";
import Button from "../innerComponent/ButtonComponentTeam";
import {useDispatch, useSelector} from "react-redux";
import {getPlayers, putFilterPlayers} from "../../redux/TeamReducer";
import Paginator from "../innerComponent/Paginator";

const arrPlayers = [
    {numberPlayer: 17, name: 'Ivan', position: 'Защитники', id: 1},
    {numberPlayer: 18, name: 'Max', position: 'Защитники', id: 2},
    {numberPlayer: 45, name: 'Pavel', position: 'Защитники', id: 3},
    {numberPlayer: 21, name: 'Konstantin', position: 'Полузащитники', id: 4},
    {numberPlayer: 32, name: 'Mikola', position: 'Полузащитники', id: 5},
    {numberPlayer: '02', name: 'Alexander', position: 'Нападающие', id: 6},
    {numberPlayer: 89, name: 'Denis', position: 'Нападающие', id: 7},
    {numberPlayer: 44, name: 'Dima', position: 'Вратари', id: 8},
    {numberPlayer: 14, name: 'Semen', position: 'Вратари', id: 9},
    {numberPlayer: 15, name: 'Zhenya', position: 'Защитники', id: 10},
    {numberPlayer: 40, name: 'Volodya', position: 'Защитники', id: 11},
    {numberPlayer: 23, name: 'Igor', position: 'Полузащитники', id: 12},
    {numberPlayer: 39, name: 'Vlad', position: 'Полузащитники', id: 13},
    {numberPlayer: '03', name: 'Alina', position: 'Нападающие', id: 14},
    {numberPlayer: 88, name: 'Viktor', position: 'Forwards', id: 15},
    {numberPlayer: 46, name: 'Anton', position: 'Вратари', id: 16},
    {numberPlayer: 46, name: 'Konstantin', position: 'Нападающие', id: 17},
    {numberPlayer: 46, name: 'Sergey', position: 'Полузащитники', id: 18},
    {numberPlayer: 46, name: 'Timofey', position: 'Нападающие', id: 19},
    {numberPlayer: 46, name: 'Yura', position: 'Защитники', id: 20}
    ]


export default function Team() {
    const [title, setTitle] = useState('Команда')
    const dispatch = useDispatch();
    const players = useSelector(state => state.teamPage.players)
    const currentPage = useSelector(state => state.teamPage.currentPage)
    const pageSize = useSelector(state => state.teamPage.pageSize)
    const totalPlayersCount = useSelector(state => state.teamPage.totalPlayersCount)

    useEffect(() => {
        dispatch(getPlayers(currentPage, pageSize))
    }, [])
    const filterPlayers = (e) => {
        let value = e.currentTarget.title
        dispatch(putFilterPlayers(value))
        setTitle(value)
    }
    const dispatchMethod = (pageNumber) => {
        dispatch(getPlayers(pageNumber, pageSize))
    }
    console.log(players)
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
                                return <Player key={player.id} player={player}/>
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

