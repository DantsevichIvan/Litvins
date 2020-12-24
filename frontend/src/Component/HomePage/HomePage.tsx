import React, {useEffect} from 'react';
import LatestResult from "./latestResult/LatestResult";
import NextMatches from "./nextMatches/NextMatch";
import News from "./news/News";
import Statistics from "./statistics/Statistics";
import {useDispatch, useSelector} from "react-redux";
import {getInfoHomePage} from "../../action/homeActions";
import HomeHeader from "./additionalComponent/HomeHeader";
import {StateType} from '../../common/types';

export default function HomePage() {
    const dispatch = useDispatch()
    // const state = useSelector((state: StateType) => state)
    // const player = useSelector((state: StateType) => state.authPage.isAuth)
    const listMatches = useSelector((state: StateType) => state.homePage.lastMatches)
    const newsList = useSelector((state: StateType) => state.homePage.newsList)
    const nextMatch = useSelector((state: StateType) => state.homePage.nextMatch)
    const statisticsPlayers = useSelector((state: StateType) => state.homePage.statisticsPlayers)


    useEffect(() => {
        dispatch(getInfoHomePage())
    }, [dispatch])

    // if (!player){
    //     return <Redirect to={"/registration"} />;
    // }

    return (
        <div>
            <HomeHeader/>
            <LatestResult listMatches={listMatches}/>
            <NextMatches nextMatch={nextMatch}/>
            <News newsList={newsList}/>
            <Statistics statisticsPlayers={statisticsPlayers}/>
        </div>
    )
}
