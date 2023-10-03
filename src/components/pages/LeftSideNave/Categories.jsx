import { Link } from "react-router-dom";

const Categories = ({category}) => {
    const {name,id} = category ;
    return (
        <div>
           <Link to={`categories/${id}`}> <h1 className="text-xl text-center font-semibold hover:text-blue-500 transition-all ease-in">{name}</h1></Link>
        </div>
    );
};

export default Categories;