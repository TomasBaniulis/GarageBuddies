import {Route, Routes} from "react-router-dom";
import User from "../forms/User";
import LoginPage from "../forms/LoginPage";
import Car from "../forms/Car";
import Dashboard from "../Dashboard/DashBoard";

const Content =()=> {

    return (
        <>
            <Routes>
                <Route path="/users/register" element={<User/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/users/addCar" element={<Car/>} />
                <Route path="/users" element={<User/>}/>
            </Routes>



        </>
    )

}

export default Content;