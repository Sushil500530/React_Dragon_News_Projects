
const Resister = () => {
    return (
       <div className="w-full bg-[#F3F3F3] lg:p-12 p-8">
         <div className="w-[600px] bg-white mx-auto p-12">
            <h1 className="text-4xl font-semibold">Register your account</h1>
            <hr className="my-5" />
            <form className="space-y-4">
                <label htmlFor="name" className="text-xl font-semibold block">Your Name</label>
                <input type="text" className="input bg-[#F3F3F3] h-[60px] w-full text-xl" name="name" id="" placeholder="Eneter your name" />
                <label htmlFor="photoURL" className="text-xl font-semibold block">Photo URL</label>
                <input type="text" className="input bg-[#F3F3F3] h-[60px] w-full text-xl" name="photoURL" id="" placeholder="Eneter your Photo URL" />
                <label htmlFor="email" className="text-xl font-semibold block">Email</label>
                <input type="email" required className="input bg-[#F3F3F3] h-[60px] w-full text-xl" name="name" id="" placeholder="Eneter your email" />
                <label htmlFor="password" className="text-xl font-semibold block">Password</label>
                <input type="password" required className="input bg-[#F3F3F3] h-[60px] w-full text-xl" name="name" id="" placeholder="Eneter your password" />
                <p className="text-xl font-semibold flex items-center gap-4"><input type="checkbox" className="w-6 h-6 cursor-pointer" name="" id="" />Accept Terms & Conditions</p>
                <button className="btn bg-black w-full text-white text-xl font-semibold capitalize hover:text-black">Register</button>
            </form>
        </div>
       </div>
    );
};

export default Resister;