import {Route, Routes} from "react-router-dom";
import User from "../forms/User";
import LoginPage from "../forms/LoginPage";
import Car from "../forms/Car";
import Garage from "../forms/Garage";
import GarageDetailsPage from "../pages/Garage/GarageDetailsPage";
import UserDetailsPage from "../pages/UserDetailPage/UserDetailsPage";
import Notifications from "../pages/UserDetailPage/Notifications";
import GarageList from "../pages/Garage/GarageList";


const Content = () => {

    return (
        <>
            <Routes>
                <Route path="/users/register" element={<User/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/users/addCar" element={<Car/>}/>
                <Route path="/users" element={<User/>}/>
                <Route path="/garages" element={<Garage/>}/>
                <Route path="/garages/:garageId" element={<GarageDetailsPage/>}/>
                <Route path="/users/main" element={<UserDetailsPage/>}/>
                <Route path="users/notifications" element={<Notifications/>}/>
                <Route path={"/garages/list"} element={<GarageList/>}></Route>
            </Routes>

        </>
    )

}

export default Content;