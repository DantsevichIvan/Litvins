import {contactApi} from "../api/api";
import {setContacts} from "../reducers/ContactReducer";

export const getContacts = () => async (dispatch) => {
    const data = await contactApi.getContacts()
    dispatch(setContacts(data))
}
