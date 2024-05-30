import { GrFormNextLink } from 'react-icons/gr';

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-2xl">{title}</h2>
        <div className="flex items-center justify-end">
          <p className="text-[#FF3811] text-xl font-bold">Price: ${price}</p>
          <button className=" text-[#FF3811]  text-3xl">
            <GrFormNextLink />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
