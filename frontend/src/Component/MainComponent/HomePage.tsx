import React, {useEffect} from 'react';
import LatestResult from "./LatestResult";
import NextMatches from "./NextMatch";
import News from "./News";
import Statistics from "./Statistics";
import {useDispatch, useSelector} from "react-redux";
import {getInfoHomePage} from "../../redux/HomeReducer";
import HomeHeader from "../Sliders/HomeHeader";
import SliderPlayers from "../Sliders/SliderPlayers";
import {StateType} from '../../common/types';

export default function HomePage() {
    const dispatch = useDispatch()
  const state = useSelector((state: StateType) => state)
  console.log('state ', state )
  debugger
    const player = useSelector((state: StateType) => state.authPage.isAuth)
    const lastMatch = useSelector((state: StateType) => state.homePage.lastMatch)
    const listMatches = useSelector((state: StateType) => state.homePage.listMatches)
    const newsList = useSelector((state: StateType) => state.homePage.newsList)
    const nextMatch = useSelector((state: StateType) => state.homePage.nextMatch)
    const statisticsPlayers = useSelector((state: StateType) => state.homePage.statisticsPlayers)
    const players = useSelector((state: StateType) => state.teamPage.players)

    console.log(players)
    useEffect(() => {
        dispatch(getInfoHomePage())
    }, [dispatch])

    // if (!player){
    //     return <Redirect to={"/registration"} />;
    // }

    return (
        <div>
            <HomeHeader/>
            <LatestResult lastMatch={lastMatch}/>
            <NextMatches listMatches={listMatches} nextMatch={nextMatch}/>
            <News newsList={newsList}/>
            <Statistics statisticsPlayers={statisticsPlayers}/>
        </div>
    )
}
