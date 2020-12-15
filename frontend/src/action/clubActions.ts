import {clubApi} from "../api/api";
import {setInfoClub, setInfoYear} from "../reducers/ClubReducer";

export const getInfoClubPage = () => async (dispatch: any) => {
  const data = await clubApi.getInfoClub()
  dispatch(setInfoClub(data))
}
export const getInfoYear = (id: any) => async (dispatch: any) => {
  const data = await clubApi.getInfoYear(id)
  dispatch(setInfoYear(data))
}

// : any 3