import { BsTelephoneX } from 'react-icons/bs';
import { TbCalendarTime } from 'react-icons/tb';
import { MdAddLocationAlt } from 'react-icons/md';

const Inquery = () => {
  return (
    <div className="max-w-6xl mx-auto  h-60 py-14  bg-black rounded-lg my-16">
      <div className="flex justify-around ">
        <div className="p-5">
          <div className="flex items-center">
            <div className="text-5xl mr-3 text-red-500">
              <TbCalendarTime />
            </div>
            <div>
              <p>We are open monday-friday</p>
              <h1 className="text-2xl font-bold">7:00 am - 9:00 pm</h1>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-5xl mr-3 text-red-500">
            <BsTelephoneX />
          </div>
          <div>
            <p>Have a question?</p>
            <h1 className="text-2xl font-bold">+2546 251 2658</h1>
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-5xl mr-3 text-red-500">
            <MdAddLocationAlt />
          </div>
          <div>
            <p>Need a repair? our address</p>
            <h1 className='"text-2xl font-bold"'>Liza Street, New York</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inquery;
