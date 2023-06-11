import {configureStore} from "@reduxjs/toolkit";

const createNewStore =()=>{
    return configureStore(
        {
            reducer:{
                userReducer
            }

        }
    )

}
export default createNewStore();