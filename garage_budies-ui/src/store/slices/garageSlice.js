import {createSlice} from "@reduxjs/toolkit";
import {showGarageDetails} from "../../components/api/garageAPI";
import {addToLocalStorage, deleteFromLocalStorage, getFromLocalStorage} from "../../storage/localStorage";

const initialState = {
    garage: null
}

const garageSlice = createSlice(
    {
        name: 'garage',
        initialState,
        reducers: {
            addGarage(state, {payload: garage}) {
                console.log(garage)
                addToLocalStorage('garage', garage)
                return garage;
            },
            removeGarage() {
                deleteFromLocalStorage('garage')
                return initialState;
            }
        }
    }
);

const getGarageFromLocalStorage = () => getFromLocalStorage('garage') || initialState

export default garageSlice.reducer;
export const {addGarage, removeGarage} = garageSlice.actions;
export {getGarageFromLocalStorage}


