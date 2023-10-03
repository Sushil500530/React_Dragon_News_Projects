import { FaRegBookmark,FaRegEye} from 'react-icons/fa';
import { BsShare } from 'react-icons/bs';
import { Link } from "react-router-dom";

const NewsShow = ({ showNews }) => {

    // const [show, setShow] = useState(false)
    const { author, title, details, thumbnail_url, total_view, _id, category_id, image_url,rating } = showNews;
    console.log(author);
    console.log(showNews);


    return (
        <div className='border mb-8 rounded'>
            <div className="bg-[#F3F3F3] h-20 flex justify-between items-center px-5 mb-5">
                <div className="flex items-center justify-center gap-4">
                    <img className="w-12 h-12 rounded-full" src={author?.img} alt="" />
                    <div>
                        <h1 className="text-base font-semibold">{author?.name}</h1>
                        <p className="text-[14px] font-normal">{author?.published_date?.split(" ")[0]}</p>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <span className='hover:cursor-pointer'><FaRegBookmark></FaRegBookmark></span>
                    <span className='hover:cursor-pointer'><BsShare></BsShare></span>
                </div>
            </div>
            <div className='space-y-5 p-5'>
                <h2 className="text-xl font-bold">{title}</h2>
                <img src={image_url} alt="" />
              
                {
                    details.length > 200
                     ? 
                     <p className="text-[#706f6f]">{details.slice(0,200)} <Link
                      to={`/news/${_id}`}
                      className= "text-xl font-bold text-blue-600">Read More....</Link></p> 
                    : 
                    <p className='text-[#706f6f]'>{details}</p>
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

export default NewsShow;