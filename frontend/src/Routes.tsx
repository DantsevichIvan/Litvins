import React from 'react';
import {Route, Switch} from "react-router-dom";

const HomePage = React.lazy(() => import('./Component/HomePage/HomePage'));
const Team = React.lazy(() => import('./Component/TeamPage/Team'));
const InfoPlayer = React.lazy(() => import('./Component/TeamPage/InfoPlayer/InfoPlayers'));
const ListMatches = React.lazy(() => import('./Component/MatchPage/ListMatches'));
const Match = React.lazy(() => import('./Component/MatchPage/Match'));
const Club = React.lazy(() => import('./Component/ClubPage/Club'));
const NewsPage = React.lazy(() => import('./Component/NewsPage/NewsPage'));
const InfoNews = React.lazy(() => import('./Component/NewsPage/InfoNews'));
const Contact = React.lazy(() => import('./Component/ContactPage/Contact'));
const Login = React.lazy(() => import('./Component/AuthPage/Login'));
const Logout = React.lazy(() => import('./Component/AuthPage/LogOut'));
const Registration = React.lazy(() => import('./Component/AuthPage/Registration'));

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/team" component={Team}/>
            <Route path="/team/player/:userId?" component={InfoPlayer}/>
            <Route exact path="/list-matches" component={ListMatches}/>
            <Route path="/list-matches/match/:matchId?" component={Match}/>
            <Route path="/club" component={Club}/>
            <Route exact path="/list-news" component={NewsPage}/>
            <Route path="/list-news/news/:newsId?" component={InfoNews}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/login" component={Login}/>
            <Route path="/logout" component={Logout}/>
            <Route path="/registration" component={Registration}/>
        </Switch>
    );
};

export default Routes;
