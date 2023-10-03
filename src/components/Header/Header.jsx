import { Outlet } from "react-router-dom";
import LeftSideNave from "../pages/LeftSideNave/LeftSideNave";
import RightSideNave from "../pages/rightSideNave/RightSideNave";
import React from 'react'

const Header = () => {
    return (
        <div className="container mx-auto font-poppins my-8">
            <Outlet></Outlet>
            <div className="grid lg:grid-cols-4 gap-6 grid-cols-1 md:grid-cols-2">
                <div>
                    <LeftSideNave></LeftSideNave>
                </div>
                <div className="lg:col-span-2">
                    <h2 className="text-3xl text-center">news comming soon</h2>
                </div>
                <div>
                    <RightSideNave></RightSideNave>
                </div>
            </div>

        </div>
    );
};

export default Header;