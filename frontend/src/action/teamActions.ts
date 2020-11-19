import {teamApi} from "../api/api";
import {setCurrentPage, setFilterPlayers, setPlayer, setPlayers, setTotalUsersCount} from "../reducers/TeamReducer";

export const getPlayers = (currentPage: number, pageSize: number) => async (dispatch: any) => {
    dispatch(setCurrentPage(currentPage))
    const data = await teamApi.getPlayers(currentPage,pageSize)
    dispatch(setTotalUsersCount(data.team.pager.totalItems))
    dispatch(setPlayers(data.team.pageOfItems))
}
export const putFilterPlayers = (item: any) => async (dispatch: any) =>{
    const data = await teamApi.putFilterPlayers(item)
    dispatch(setCurrentPage(data.pager.currentPage))
    dispatch(setTotalUsersCount(data.pager.totalItems))
    dispatch(setFilterPlayers(data.pageOfItems))
}
export const getPlayer = (userId: any) => async (dispatch: any) =>{
    const data = await teamApi.getPlayer(userId)
    dispatch(setPlayer(data))
}
// : any 5