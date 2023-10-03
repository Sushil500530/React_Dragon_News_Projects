import { Outlet } from "react-router-dom";
import LeftSideNave from "../pages/LeftSideNave/LeftSideNave";
import RightSideNave from "../pages/rightSideNave/RightSideNave";
import React, { useEffect, useState } from 'react'
import NewsShow from "./NewsShow";

const Header = () => {
    const [showNews, setShowNews] = useState([]);

    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => setShowNews(data))
    }, [])

    // console.log(showNews);



    return (
        <div className="container mx-auto font-poppins">
            <Outlet></Outlet>
            <div className="grid lg:grid-cols-4 gap-6 grid-cols-1 md:grid-cols-2 mt-8">
                <div>
                <h2 className="text-xl mb-5 font-semibold">All Category</h2>
                    <LeftSideNave></LeftSideNave>
                </div>
                <div className="lg:col-span-2">
                    <h3 className="text-xl font-bold mb-5">Dragon News Home</h3>
                    {
                        showNews.map((newses,idx) => <NewsShow showNews={newses} key={idx} ></NewsShow>)
                    }
                </div>
                <div>
                    <RightSideNave></RightSideNave>
                </div>
            </div>

        </div>
    );
};

export default Header;