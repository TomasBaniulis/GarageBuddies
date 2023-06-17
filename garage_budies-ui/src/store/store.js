import {configureStore} from "@reduxjs/toolkit";
import {logger} from "redux-logger/src";
import user from "./slices/userSlice";
import garage from "./slices/garageSlice";
import {getUserFromLocalStorage} from "./slices/userSlice";
import {getGarageFromLocalStorage} from "./slices/garageSlice";
import {getCarFromLocalStorage} from "./slices/carSlice";
import car from "./slices/carSlice";

const createNewStore = () => {
    const store = configureStore(
        {
            reducer: {
                user,
                garage,
                car
            },
            middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
            preloadedState: {
                user: getUserFromLocalStorage(),
                garage: getGarageFromLocalStorage(),
                car:getCarFromLocalStorage()
            }
        }
    );

    return store;
}

const store = createNewStore();
export default store;