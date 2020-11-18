const SET_CONTACTS = 'RECENTCOMMENTS::SET_CONTACTS'

const initState = {
    contacts: []
}

const ContactReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_CONTACTS: {
            return {
                ...state,
                contacts: [...action.data]
            }
        }
        default: return{...state}
    }
}

export const setContacts = (data) => {
    return {
        type: SET_CONTACTS,
        data
    }
}

export default ContactReducer
