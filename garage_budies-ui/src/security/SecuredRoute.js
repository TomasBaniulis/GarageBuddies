import {useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router-dom";

const SecuredRoute =() => {

    const user = useSelector(state => state.user.user)

    return user ? <Outlet/>:<Navigate to="/login"/>

}
export default SecuredRoute