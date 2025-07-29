import { Navigate, Outlet } from "react-router-dom";

const isLocalStorageValid = (): boolean => {
    const localstorage = localStorage.getItem("dataToStore");
    if (!localstorage) return false;

    const { expiry } = JSON.parse(localstorage);
    return new Date().getTime() < expiry;
};

const PrivateRoute = () => {
    return isLocalStorageValid() ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
