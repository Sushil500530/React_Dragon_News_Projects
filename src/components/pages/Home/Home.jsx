import SubHeader from "../Subheader/SubHeader";
import BreakingNews from "../breakingNews/BreakingNews";
import Navbar from "../navbar/Navbar";


const Home = () => {
    return (
        <div>
        <SubHeader></SubHeader>
        <BreakingNews></BreakingNews>
        <Navbar></Navbar>
            <h1 className="text-4xl font-bold font-poppins">this Home</h1>
            
        </div>
    );
};

export default Home