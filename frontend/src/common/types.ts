import photo from "../logo/pngtree-users-vector-icon-png-image_3725294.jpg";

export type StateType = {
    authPage: AuthPageType
    clubPage: ClubPageType
    contactPage: ContactPageType
    form: {}
    homePage: HomePageType
    matchesPage: MatchesPageType
    newsPage: NewsPageType
    teamPage: TeamPageType
}

type AuthPageType = {
    email: null | string
    error: null | string
    isAuth: boolean
    login: null | string
    message: string
    playerId: null | string
}
//ClubPAge
export type ClubPageType = {
    infoForClub: null | string
    listYears: Array<InfoYearType>

}
export type InfoYearType = {
    year: number
    id: number
    activeClass: boolean
}
//ContactPage
export type ContactPageType = {
    contacts: Array<ContactInfoType>
}
export type ContactInfoType= {
    position:string
    phone:number
    mail:string
    address:string
    id:number
}
//HomePage
type HomePageType = {
    lastMatch: LastMatchType
    lastMatches: Array<LastMatchType>
    newsList: Array<NewsType>
    statisticsPlayers: Array<StatisticsListType>
    nextMatch: MatchType
}
export type NewsType = {
    dataValue: number | string
    nameNews: string
    textNews: string
    _id: string
}
export type StatisticsListType = {
    name: string
    id: number
    listPlayers: Array<StatisticsPlayerType>
}
export type StatisticsPlayerType = {
    name: string
    count: number
    id: number
}

//MatchPage
export type LastMatchType = {
    dateTime: number | string
    game: string
    _id: string
    location: string
    opposingTeam: string
    result: { resultTeam: number, resultOpposingTeam: number }
    score: boolean
    team: number
}
export type MatchType = {
    dateTime: string
    game: string
    _id: string
    location: string
    opposingTeam: string
    score: boolean
    team: string
    value?: string
    result?: {
        resultTeam: number
        resultOpposingTeam: number
    }
}
export type NextMatchType = {
    dateTime: string
    game: string
    _id: string
    location: string
    opposingTeam: string
    score: boolean
    team: string
}
export type MatchesPageType = {
    lastMatch: LastMatchType
    match: MatchType
    matches: Array<MatchType>
    message: string
    nextMatch: MatchType
}


//NewsPage
export type NewsInfoType = {
    dataValue: string,
    nameNews: string,
    textNews: string,
    _id: string
}
export type NewsPageType = {
    currentPage: number
    message: undefined | string
    messageAdd: string
    newsList: Array<NewsInfoType>
    pageSize: number
    totalPlayersCount: number
    news:NewsInfoType
}
//TeamPage
export type TeamPageType = {
    currentPage: number
    pageSize: number
    player: PlayerType
    players: Array<PlayerType>
    totalPlayersCount: number
}
export type PlayerType = {
    name: string
    numberPlayer: number
    lastName: string
    birthday: string | number
    email: string
    rating: number
    position: string
    statisticPlayer: {
        matchesPlayed: number
        goals: number
        assist: number
        bombardier: number
    }
    _id: string
}

// Array<string | number>

// MatchType и MatchType одинаковые
