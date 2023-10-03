import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import React from "react";
const BreakingNews = () => {
    return (
        <div className="flex my-4">
            <button className="btn btn-secondary text-xl font-semibold px-2">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
              <Link to='/'>  Match Highlights: Germany vs Spain — as it happened  !  Match Highlights: Germany vs Spain as...</Link>
              <Link className="mr-12" to='/'>  Match Highlights: Germany vs Spain — as it happened  !  Match Highlights: Germany vs Spain as...</Link>
              <Link className="mr-12" to='/'>  Match Highlights: Germany vs Spain — as it happened  !  Match Highlights: Germany vs Spain as...</Link>
              <Link className="mr-12" to='/'>  Match Highlights: Germany vs Spain — as it happened  !  Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;