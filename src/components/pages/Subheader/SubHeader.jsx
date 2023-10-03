import logo from '../../../../src/assets/logo.png'
import moment from 'moment';

const SubHeader = () => {
    return (
        <div className='text-center space-y-2 my-7'>
          <img className='mx-auto' src={logo} alt="image" />
          <p className='text-base'>Journalism Without Fear or Favour</p>
          <h3 className="text-xl">{moment().format("dddd, MMMM D, YYYY")}</h3>
        </div>
    );
};

export default SubHeader;