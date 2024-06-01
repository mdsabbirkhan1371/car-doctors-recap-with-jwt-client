import { GrFormNextLink } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-2xl">{title}</h2>
        <div className="flex items-center justify-end">
          <p className="text-[#FF3811] text-xl font-bold">Price: ${price}</p>
          <Link to={`/booking/${_id}`}>
            <button className=" text-[#FF3811]  text-3xl">
              <GrFormNextLink />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

ServiceCard.propTypes = {
  service: PropTypes.object,
};
