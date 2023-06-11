import {configureStore} from "@reduxjs/toolkit";
import {logger} from "redux-logger/src";
import user from ".slices.userSlice";

const createNewStore =()=>{
    return configureStore(
        {
            reducer:{
                user
            },
            middleware:getDefaultMiddleware => getDefaultMiddleware().concat(logger)
        }
    )
}
export default createNewStore();