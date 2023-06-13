import {createSlice} from "@reduxjs/toolkit";
import {addToLocalStorage, deleteFromLocalStorage, getFromLocalStorage} from "../../storage/localStorage";

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
                console.log(user)
                addToLocalStorage('user', user)
                return user;
            },

            removeUser (){
                deleteFromLocalStorage('user')
                return initialState;
            },
            addCar (state, action) {
                const car = action.payload.car;
                state.cars.push(car);
            }
        }
    }
);

const getUserFromLocalStorage =() => getFromLocalStorage('user') || initialState;
export default userSlice.reducer;
export const {addUser, removeUser,addCar} = userSlice.actions
export { getUserFromLocalStorage}