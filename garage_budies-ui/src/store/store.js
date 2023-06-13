import {configureStore} from "@reduxjs/toolkit";
import {logger} from "redux-logger/src";
import user from "./slices/userSlice";
import {getUserFromLocalStorage} from "./slices/userSlice";

const createNewStore =()=>{
    const store = configureStore(
        {
            reducer:{
                user
            },
            middleware:getDefaultMiddleware => getDefaultMiddleware().concat(logger),
            preloadedState:{
                user: getUserFromLocalStorage()
            }
        }
    );

    return store;
}

const store = createNewStore();
export default store;