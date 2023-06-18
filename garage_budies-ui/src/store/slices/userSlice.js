import {createSlice} from "@reduxjs/toolkit";
import {addToLocalStorage, deleteFromLocalStorage, getFromLocalStorage} from "../../storage/localStorage";

const initialState = {
    user: null,
    jwtToken: null,
    notifications:null

}

const userSlice = createSlice(
    {
        name: 'user',
        initialState,
        reducers: {
            addUser(state, {payload: user}) {
                console.log(user)
                addToLocalStorage('user', user)
                return user;
            },

            removeUser() {
                deleteFromLocalStorage('user')
                return initialState;
            },

            deleteMessage(state,{payload:messageId} ){
                console.log("message id in action to delete in slice", messageId)
                console.log("messages:",state.notifications)
                return state.notifications.filter(n => !n.id===messageId);

            }
        }
    }
);

const getUserFromLocalStorage = () => getFromLocalStorage('user') || initialState

export default userSlice.reducer;
export const {addUser, removeUser, deleteMessage} = userSlice.actions
export {getUserFromLocalStorage}