import {homeApi} from "../api/api";
import {setAllInfoHomePage} from "../reducers/HomeReducer";

export const getInfoHomePage = () => async (dispatch: any) =>{
    const data = await homeApi.getInfoHomePage()
    dispatch(setAllInfoHomePage(data))
}
// : any 1