
import useAuth from '../hooks/useAuth'
import { useLocation, Navigate, Outlet } from "react-router-dom";
import Unauthorized from '../pages/Unauthorized';

// requires authentication for child components
export default function RequireAuth({ allowedRoles }){

    const { auth } = useAuth();
    const location = useLocation();
    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
        ? <Outlet />:
        <Unauthorized/>
    );


}