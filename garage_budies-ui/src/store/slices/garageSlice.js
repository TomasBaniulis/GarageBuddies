import {createSlice} from "@reduxjs/toolkit";
import {showGarageDetails} from "../../components/api/garageAPI";
import {addToLocalStorage, deleteFromLocalStorage} from "../../storage/localStorage";

const initialState =  {
    garage:null
}

const garageSlice = createSlice(
    {
        name:'garage',
        initialState,
        reducers:{
            showGarageDetails(state, {payload:garage}){
                console.log(garage)
                addToLocalStorage('garage', garage)
                return garage;
            },
            removeGarage(){
                deleteFromLocalStorage('garage')
                return initialState;
            }
        }
    }
);

const getGarageFromLocalStorage = () => getGarageFromLocalStorage('garage') || initialState;

export default  garageSlice.reducer;
export const {showGarageDetails,removeGarage}=garageSlice.actions;
export {getGarageFromLocalStorage}


