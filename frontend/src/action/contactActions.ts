import {contactApi} from "../api/api";
import {setContacts} from "../reducers/ContactReducer";

export const getContacts = () => async (dispatch: any) => {
    const data = await contactApi.getContacts()
    dispatch(setContacts(data))
}

// : any 1