import {authAPI} from "../api/api";
import {SetAuthUser, SUCCESS_ERROR, SuccessLoginOut} from "../reducers/AuthReducer";

export const logIn = (login: string, password: string) => async (dispatch: any) => {
  const res = await authAPI.login(login, password)
  // dispatch(SuccessLogin(res))
};
export const logOut = () => async (dispatch: any) => {
  const res = await authAPI.logOut()
  dispatch(SuccessLoginOut(res))
};
export const SuccessError = (data: any) => {
  return {type: SUCCESS_ERROR, data}
};
export const registration = (formData: any) => async (dispatch: any) => {
  const res = await authAPI.registration(formData)
  if (res.status === 201) {
    dispatch(SetAuthUser(res.data))
  } else if (res.status === 400) {
    dispatch(SuccessError(res.data))
  }
};

// : any 5
