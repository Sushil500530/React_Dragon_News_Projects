import { FaGoogle, FaGithub, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';

const RightSideNave = () => {
    return (
        <div className='space-y-8'>
            <div className='space-y-3'>
                <h2 className="text-xl font-semibold">Login With</h2>
                <div className=" border rounded flex items-center justify-center gap-2 font-semibold cursor-pointer py-2 hover:border-blue-500 transition-all ease-in">
                    <FaGoogle className='text-2xl'></FaGoogle>
                    <button className='text-base hover:text-blue-500 transition-all ease-in'>Login With Google</button>
                </div>
                <div className=" border rounded flex my-3 items-center justify-center gap-2 font-semibold cursor-pointer py-2 hover:border-blue-500 transition-all ease-in">
                    <FaGithub className='text-2xl'></FaGithub>
                    <button className='text-base hover:text-blue-500 transition-all ease-in'>Login With Github</button>
                </div>
            </div>
            <div className='space-y-5'>
                <h2 className="text-xl font-semibold">Find Us On</h2>
                <div className='border-2 divide-y-2 rounded-lg '>
                    <a className=" flex items-center font-semibold py-2 pl-5">
                        <button className='btn rounded-full text-3xl p-2  mr-4 text-blue-700'><FaFacebook></FaFacebook></button>
                        <button className='text-base hover:text-blue-500 transition ease-in'>Facebook</button>
                    </a>
                    <a className="flex items-center  font-semibold py-2 pl-5">
                        <button className='btn rounded-full text-3xl p-2  mr-4 text-blue-600'><FaTwitter></FaTwitter></button>
                        <button className='text-base hover:text-blue-500 transition ease-in'>Twitter</button>
                    </a>
                    <a className="flex items-center font-semibold py-2 pl-5">
                        <button className='btn rounded-full text-3xl p-2  mr-4 text-amber-600'><FaInstagram></FaInstagram></button>
                        <button className='text-base hover:text-blue-500 transition ease-in'>Instagram</button>
                    </a>
                </div>
            </div>
            <div className='space-y-3'>
                <h2 className="text-xl font-semibold">Q Zone</h2>
                <img className='cursor-pointer' src={qzone1} alt="" />
                <img className='cursor-pointer' src={qzone2} alt="" />
                <img className='cursor-pointer' src={qzone3} alt="" />
            </div>
            <div className='text-white w-full h-[520px] bg-black space-y-5 flex flex-col items-center justify-center text-center'>
                <h3 className='text-3xl font-bold'>Create an Amazing Newspaper</h3>
                <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className='text-2xl bg-red-500 p-5'>Learn More</button>
            </div>
        </div>
    );
};

export default RightSideNave;