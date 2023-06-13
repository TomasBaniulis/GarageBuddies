import {Route, Routes} from "react-router-dom";
import User from "../forms/User";
import LoginPage from "../forms/LoginPage";
import Car from "../forms/Car";

const Content =()=> {

    return (
        <>
            <Routes>
                <Route path="/users/register" element={<User/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/users/addCar" element={<Car/>} />
            </Routes>



        </>
    )

}

export default Content;