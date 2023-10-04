import { useEffect, useState } from "react";
import Categories from "./Categories";
import News from "./News";

const LeftSideNave = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("/categories.json")
            .then(res => res.json())
            .then(getData => setCategories(getData))

    }, [])
    // console.log(categories);
    return (
        <div>
        <h1 className="px-12 py-3 text-center rounded bg-[#f3f3f3] text-xl font-semibold mb-8">National News </h1>
            <div className="space-y-5">
                {
                categories.map((category) => <Categories category={category} key={category.id}></Categories> )
                }
            </div>
            <News></News>
        </div>
    );
};

export default LeftSideNave;