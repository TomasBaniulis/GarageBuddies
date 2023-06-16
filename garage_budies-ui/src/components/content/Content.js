import {Route, Routes} from "react-router-dom";
import User from "../forms/User";
import LoginPage from "../forms/LoginPage";
import Car from "../forms/Car";
import Dashboard from "../Dashboard/DashBoard";
import Garage from "../forms/Garage";

const Content =()=> {

    return (
        <>
            <Routes>
                <Route path="/users/register" element={<User/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/users/addCar" element={<Car/>} />
                <Route path="/users" element={<User/>}/>
                <Route path="/garages" element={<Garage/>}/>
            </Routes>

        </>
    )

}

export default Content;