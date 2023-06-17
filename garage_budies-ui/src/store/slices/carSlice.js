import {createSlice} from "@reduxjs/toolkit";
import {addToLocalStorage, deleteFromLocalStorage, getFromLocalStorage} from "../../storage/localStorage";

const initialState = { car: null}
const carSlice = createSlice(
    {
        name:'car',
        initialState,
        reducers :{
            addCar(state, {payload:car}){
                addToLocalStorage('car', car)
                return car;
            },

            removeCar(){
                deleteFromLocalStorage('car')
                return initialState;
            }
        }
    }
);

const getCarFromLocalStorage = () => getFromLocalStorage('car') || initialState

export default carSlice.reducer;
export const {addCar, removeCar} = carSlice.actions;
export {getCarFromLocalStorage};