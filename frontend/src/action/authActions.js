import {authAPI} from "../api/api";
import {SetAuthUser, SUCCESS_ERROR, SuccessLoginOut} from "../reducers/AuthReducer";

export const logIn = (login, password) => async (dispatch) => {
    const res = await authAPI.login(login, password)
    console.log(res)
    // dispatch(SuccessLogin(res))
};
export const logOut = () => async (dispatch) => {
    const res = await authAPI.logOut()
    console.log(res)
    dispatch(SuccessLoginOut(res))
};
export const SuccessError = (data) => {
    return {type: SUCCESS_ERROR, data}
};
export const registration = (formData) => async (dispatch) => {
    const res = await authAPI.registration(formData)
    if (res.status === 201){
        dispatch(SetAuthUser(res.data))
    }else if(res.status === 400){
        dispatch(SuccessError(res.data))
        console.log(res)
    }
};
