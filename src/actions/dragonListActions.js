


export const UPDATE_NEW_MEMBER = "UPDATE_NEW_MEMBER"

export const ADD_MEMBER = "ADD_MEMBER"



export const updateNewMember = newMember => {

    return {
        type: UPDATE_NEW_MEMBER,
        payload: newMember
    }
}


export const addMember = member => {
    return {
        type: UPDATE_NEW_MEMBER,
        payload: member
    }

}