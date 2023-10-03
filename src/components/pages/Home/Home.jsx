// import { Outlet } from "react-router-dom";
import { useEffect, useState } from 'react'
import SubHeader from "../Subheader/SubHeader";
import BreakingNews from "../breakingNews/BreakingNews";
import Navbar from "../navbar/Navbar";
import LeftSideNave from '../LeftSideNave/LeftSideNave';
import RightSideNave from '../rightSideNave/RightSideNave';
import NewsShow from '../../Header/NewsShow';


const Home = () => {

    const [showNews, setShowNews] = useState([]);

    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => setShowNews(data))
    }, [])

    // console.log(showNews);


    return (
        <div>
            <SubHeader></SubHeader>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid lg:grid-cols-4 gap-6 grid-cols-1 md:grid-cols-2 mt-8">
                <div>
                    <h2 className="text-xl mb-5 font-semibold">All Category</h2>
                   <LeftSideNave></LeftSideNave>
                </div>
                <div className="lg:col-span-2">
                    <h3 className="text-xl font-bold mb-5">Dragon News Home</h3>
                    {
                        showNews.map((newses, idx) => <NewsShow showNews={newses} key={idx} ></NewsShow>)
                    }
                </div>
                <div>
                    <RightSideNave></RightSideNave>
                </div>
            </div>
        </div>
    );
};

export default Home