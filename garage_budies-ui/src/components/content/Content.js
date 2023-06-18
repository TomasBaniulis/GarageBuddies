import {Route, Routes} from "react-router-dom";
import User from "../forms/User";
import LoginPage from "../forms/LoginPage";
import Car from "../forms/Car";
import Garage from "../forms/Garage";
import GarageDetailsPage from "../pages/Garage/GarageDetailsPage";
import UserDetailsPage from "../pages/UserDetailPage/UserDetailsPage";
import Notifications from "../pages/UserDetailPage/Notifications";
import GarageList from "../pages/Garage/GarageList";
import SecuredRoute from "../../security/SecuredRoute";


const Content = () => {

    return (
        <>
            <Routes>

                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/users" element={<User/>}/>


                <Route path="/users/addCar" element={<SecuredRoute/>}>
                    <Route path="/users/addCar" element={<Car/>}/>
                </Route>

                <Route path="/garages" element={<SecuredRoute/>}>
                    <Route path="/garages" element={<Garage/>}/>
                </Route>

                <Route path="/garages/:garageId" element={<SecuredRoute/>}>
                    <Route path="/garages/:garageId" element={<GarageDetailsPage/>}/>
                </Route>

                <Route path="/users/main" element={<SecuredRoute/>}>
                    <Route path="/users/main" element={<UserDetailsPage/>}/>
                </Route>

                <Route path="users/notifications" element={<Notifications/>}/>

                <Route path={"/garages/list"} element={<SecuredRoute/>}>
                    <Route path={"/garages/list"} element={<GarageList/>}/>
                </Route>
            </Routes>

        </>
    )

}

export default Content;