import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:4000/'
})

export const teamApi = {
    getPlayers(currentPage: number, pageSize: number) {
        return instance.get(`team?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    putFilterPlayers(filter: any){
        return instance.get(`team/position=${filter}`)
            .then(res => res.data)
    },
    getPlayer(userId: any) {
        return instance.get(`team/player/` + userId)
            .then(res => res.data)
    }
}
export const matchesApi = {
    getMatches() {
        return instance.get(`list-matches`)
            .then(res => res.data)
    },
    getNextMatch() {
        return instance.get(`list-matches/next-match`)
            .then(res => res.data)
    },
    getLastMatch() {
        return instance.get(`list-matches/last-match`)
            .then(res => res.data)
    },
    getMatch(matchId: any) {
        return instance.get(`list-matches/match/` + matchId)
            .then(res => res.data)
    },
    addMatch(matchInfo: any) {
        return instance.post(`list-matches/match/`, {matchInfo})
            .then(res => res.data)
    },
    deleteMatch(matchId: any) {
        return instance.delete(`list-matches/match/` + matchId)
            .then(res => res.data)
    },
    addResultMatch(result: any, matchID: any) {
        return instance.put(`list-matches/match/` + matchID, {result})
            .then(res => res.data)
    }
}
export const homeApi = {
    getInfoHomePage() {
        return instance.get(`homeInfo?count=2`)
            .then(res => res.data)
    }
}
export const clubApi = {
    getInfoClub() {
        return instance.get(`/club`)
            .then(res => res.data)
    },
    getInfoYear(id: any) {
        return instance.get(`/club/year/` + id)
            .then(res => res.data)
    }
}

export const newsApi = {
    getListNews(currentPage: number, pageSize: number) {
        return instance.get(`list-news?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    getNews(newsId: any) {
        return instance.get(`list-news/news/` + newsId)
            .then(res => res.data)
    },
    addNews(newsInfo: any) {
        return instance.post(`list-news/news/`, {newsInfo})
            .then(res => res.data)
    },

}
export const imageApi = {
    uploadFile(fd: any) {
        return instance.post(`/image/`, {fd})
            .then(res => res.data)
    }
}

export const contactApi = {
    getContacts() {
        return instance.get(`contact`)
            .then(res => res.data)
    }
}
export const authAPI = {
    login(login: string, password: string) {
        return instance.post(`auth/login`, {login, password})
    },
    logOut() {
        return instance.post(`auth/logout`)
    },
    registration(data: any) {
        return instance.post(`register`, {data})
    }
};

// : any 12
