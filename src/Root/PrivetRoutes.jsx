import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { RotatingLines } from  'react-loader-spinner'

const PrivetRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation() ;
    // console.log(location);

    if (loading) {
        return <p className="flex items-center justify-center w-full h-[50vh]"><RotatingLines
            strokeColor="purple"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
        /></p>
    }
    if (user) {

        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>


};

export default PrivetRoutes;