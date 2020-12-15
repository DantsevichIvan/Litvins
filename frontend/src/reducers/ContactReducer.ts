const SET_CONTACTS = 'RECENTCOMMENTS::SET_CONTACTS'

const initState = {
    contacts: []
}

const ContactReducer = (state = initState, action: any) => {
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

export const setContacts = (data: any) => {
    return {
        type: SET_CONTACTS,
        data
    }
}

export default ContactReducer

// : any 2