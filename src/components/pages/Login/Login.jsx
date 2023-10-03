import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import { useContext } from "react";
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Login = () => {
    const{signInUser} = useContext(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault() ;
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget) ;
        const email = form.get('email') ;
        const password = form.get('password');
        console.log(email,password);

        signInUser(email,password)
        .then(result => {
        console.log(result.user);
        })
        .catch(error => {
        console.error(error);
        
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="w-full bg-[#F3F3F3] lg:p-12 p-8">
                <div className="w-[600px] bg-white mx-auto p-12">
                    <h1 className="text-4xl font-semibold">Login your account</h1>
                    <hr className="my-5" />
                    <form onSubmit={handleLogin} className="space-y-4">
                        <label className="text-xl font-semibold block">Email address</label>
                        <input type="email" required className="input bg-[#F3F3F3] h-[60px] w-full text-xl" name="email" id="" placeholder="Eneter your email" />
                        <label className="text-xl font-semibold block">Password</label>
                        <input type="password" required className="input bg-[#F3F3F3] h-[60px] w-full text-xl" name="password" id="" placeholder="Eneter your password" />
                        <p className="text-xl font-semibold flex items-center gap-4"><input type="checkbox" className="w-6 h-6 cursor-pointer" name="" id="" />Accept Terms & Conditions</p>
                        <button className="btn bg-black w-full text-white text-xl font-semibold capitalize hover:text-black">Login</button>
                        <p className='text-center'>Don't Have An Account? <Link to="/resister"><span className='text-red-500 font-bold'>Resister</span></Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;