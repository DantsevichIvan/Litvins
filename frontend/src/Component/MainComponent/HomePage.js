import React, {useEffect} from 'react';
import LatestResult from "./LatestResult";
import NextMatches from "./NextMatch";
import News from "./News";
import Statistics from "./Statistics";
import {useDispatch, useSelector} from "react-redux";
import {getInfoHomePage} from "../../redux/HomeReducer";
import HomeHeader from "../Sliders/HomeHeader";
import SliderPlayers from "../Sliders/SliderPlayers";

export default function HomePage() {
    const dispatch = useDispatch()
    const player = useSelector(state => state.authPage.isAuth)
    const lastMatch = useSelector(state => state.homePage.lastMatch)
    const listMatches = useSelector(state => state.homePage.listMatches)
    const newsList = useSelector(state => state.homePage.newsList)
    const nextMatch = useSelector(state => state.homePage.nextMatch)
    const statisticsPlayers = useSelector(state => state.homePage.statisticsPlayers)
    const players = useSelector(state => state.teamPage.players)

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
