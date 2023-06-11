import {createSlice} from "@reduxjs/toolkit";
import {addToLocalStorage, deleteFromLocalStorage} from "../../storage/localStorage";

const initialState= {
    user:null,
    jwtToken: null
}

const userSlice = createSlice(
    {
        name:'user',
        initialState,
        reducers:{
            addUser(state, {payload: user}){
                addToLocalStorage('user', user)
                return user;
            },

            removeUser (){
                deleteFromLocalStorage('user')
                return initialState;
            },
            addCar (state, action) {
                const car = action.payload.car;
                const copyOfUser = [...state];
                copyOfUser.cars.push(car);
                return copyOfUser;
            }
        }
    }
);
export default userSlice.reducer;
export const {addUser, removeUser,addCar} = userSlice.actions