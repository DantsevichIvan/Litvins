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
type ClubPageType = {
  infoForClub: InfoForClubType
  infoYear: Array<number>
}
type InfoForClubType = {
  year: number
  id: number
  activeClass: false
}

type ContactPageType = {
  contacts: Array<number>
}
type HomePageType = {
  lastMatch: LastMatchType
  listMatches: Array<any>
  newsList: Array<any>
  statisticsPlayers: Array<any>
  infoAboutClub: any
  // infoAboutClub: any    - будет удалено
  nextMatch: MatchType
}
export type LastMatchType = {
  dateTime: number | string
  game: string
  id: string
  location: string
  opposingTeam: string
  result: { resultTeam: number, resultOpposingTeam: number }
  score: boolean
  team: number
}
export type MatchType = {
  dateTime: string
  game: string
  id: string
  location: string
  opposingTeam: string
  score: boolean
  team: string
  value?: string
}
type MatchesPageType = {
  lastMatch: LastMatchType
  match: MatchType
  matches: Array<number>
  message: string
  nextMatch: MatchType
}
type NewsPageType = {
  currentPage: number
  message: undefined | string
  messageAdd: string
  news: { dataValue: string, nameNews: string, textNews: string }
  newsList: Array<number>
  pageSize: number
  totalPlayersCount: number
}
type TeamPageType = {
  currentPage: number
  pageSize: number
  player: PlayerType
  players: Array<PlayerType>
  totalPlayersCount: number
}

type PlayerType = {
  numberPlayer: number
  name: string
  position: string
  id: number
}

// Array<string | number>

// MatchType и MatchType одинаковые