
import useAuth from '../hooks/useAuth'
import { useLocation, Navigate, Outlet } from "react-router-dom";

// requires authentication for child components
export default function RequireAuth({ allowedRoles }){

    const { auth } = useAuth();
    const location = useLocation();
    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
        ? <Outlet />:
        <h2> Not Authorized </h2>
    );


}