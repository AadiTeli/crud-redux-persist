import { ADD_USER, DEL_USER,EDIT_USER } from "./userType"

export const addUser = newUsers => {
    console.log("newUserrr",newUsers);
    return {
        type: ADD_USER,
        payload : newUsers
    }
}
export const delUser = id => {
    console.log("iddd",id);
    return {
        type: DEL_USER,
        payload : id
    }
}
export const editUser = data => {
    console.log("DATA@",data);
    return {
        type: EDIT_USER,
        payload : data
    }
}
