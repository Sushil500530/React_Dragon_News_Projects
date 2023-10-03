
const NewsDetails = () => {
    return (
        <div>
             <div className='space-y-5 p-5'>
                <h2 className="text-xl font-bold">{title}</h2>
                <img src={image_url} alt="" />
                <p className='text-base font-normal text-[#706f6f]'>{details.slice(0, 160)}....{show}
                </p>
                {
                    details ? <button onClick={seeAll} className='text-amber-500 '>Read More</button> : "hidden"
                }
                <hr className='mt-5 w-[95%] mx-auto' />
                <div>
                    <div className='flex justify-between p-5'>
                        <div className="rating rating-md">
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <p className='ml-4 mt-1'>{rating.number}</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <p><FaRegEye></FaRegEye></p>
                            <p>{total_view}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;