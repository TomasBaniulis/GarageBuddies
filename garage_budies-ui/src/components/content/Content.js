import {Route, Routes} from "react-router-dom";
import User from "../forms/User";

const Content =()=> {

    return (
        <>
            <Routes>
                <Route path="/users/register" element={<User/>} />
            </Routes>



        </>
    )

}

export default Content;