import { useEffect, useState } from "react";
import {MdDateRange} from 'react-icons/md';
import moment from 'moment';

const News = () => {
    const [news,setNews] = useState([]) 

    useEffect(() => {
     fetch('/news.json') 
     .then(response => response.json()) 
     .then(data => setNews(data))
    },[])
    // console.log(news);
    return (
        <div className="mt-12">
            {
            news.map((news,idx) => <div key={idx}>
               <div className="space-y-2 mb-8">
               <img className="rounded" src={news?.image_url} alt="image" />
                <h1 className="text-xl font-semibold">{news.title}</h1>
                <h1 className="flex justify-around"> News <span className="flex gap-3 items-center"><MdDateRange></MdDateRange>{moment().format(" MMMM D, YYYY")}</span></h1>
               </div>
            </div>)
            }
        </div>
    );
};

export default News;