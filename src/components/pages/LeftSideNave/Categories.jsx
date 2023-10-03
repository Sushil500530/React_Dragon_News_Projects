import { Link } from "react-router-dom";
import PropTypes from "prop-types"
const Categories = ({category}) => {
    const {name,id} = category ;
    return (
        <div>
           <Link to={`categories/${id}`}> <h1 className="text-xl text-center font-semibold hover:text-blue-500 transition-all ease-in">{name}</h1></Link>
        </div>
    );
};
Categories.prropTypes = {
category:PropTypes.object.isRequired
}
export default Categories;