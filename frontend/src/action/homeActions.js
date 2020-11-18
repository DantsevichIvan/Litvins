import {homeApi} from "../api/api";
import {setAllInfoHomePage} from "../reducers/HomeReducer";

export const getInfoHomePage = () => async (dispatch) =>{
    const data = await homeApi.getInfoHomePage()
    dispatch(setAllInfoHomePage(data))
}
