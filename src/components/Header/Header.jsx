import { Outlet } from "react-router-dom";


const Header = () => {


    return (
        <div className="container mx-auto font-poppins">
            <Outlet></Outlet>
        </div>
    );
};

export default Header;