
import { NavLink,Link } from "react-router-dom";
import account from "../../../assets/user.png" ;
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import {useContext} from "react"



const Navbar = () => {
    
    const {user,logOut} = useContext(AuthContext)
    const navLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/career">Career</NavLink></li>
    </>
    const handleSignOut = () => {
        logOut()
        .then(result => {
        console.log(result.user)
        })
        .catch(error => console.error(error))
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={account} alt="image" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                uer name
                                <span className="badge">Profile</span>
                            </a>
                        </li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
               {
               user ?  <Link onClick={handleSignOut} to="/login"><button className="btn bg-red-500 text-white px-8 py-2 hover:text-black"><Link to="/login">LogOut</Link></button></Link> :  <Link to="/login"><button className="btn bg-black text-white px-8 py-2 hover:text-black"><Link to="/login">Login</Link></button></Link>
               }
            </div>
        </div>
    );
};

export default Navbar;
