import { ADD_USER, DEL_USER, EDIT_USER } from "./userType"


const initialState = {
    // users: JSON.parse(localStorage.getItem('users')) || []
    users: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:

            const finalData = [...state.users, action.payload]
            // localStorage.setItem("users", JSON.stringify(finalData))
            return {
                ...state,
                users: finalData
            }
        case DEL_USER:
            const del = state.users.filter(data => action.payload !== data.id) // Will give rest of data rather than matching ones
            // localStorage.setItem("users", JSON.stringify(del))
            return {
                ...state,
                users: del
            }
        case EDIT_USER:
            const newData = action.payload
            const updatedData = state.users.map(data => {
                if(data.id == newData.id) 
                {
                    return newData   // In map it will search for matching id 1by1. And return the existing data. If that id matches, then update that data and move frwrd.
                }
                return data
            })
            // localStorage.setItem("users", JSON.stringify(updatedData))
            {
                console.log("updatedData",updatedData);
                return {
                ...state,
                users: updatedData      
                }
            }
            return {
                ...state,
            }
        default: return state
    }

}
export default userReducer