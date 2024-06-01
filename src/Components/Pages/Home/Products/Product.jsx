import { IoIosStarOutline } from 'react-icons/io';
import PropTypes from 'prop-types';

const Product = ({ product }) => {
  const { name, price, img } = product;

  return (
    <div className="card w-96 shadow-xl p-5 border border-orange-950	mt-5 ">
      <figure>
        <img className="h-32" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div>
          <h1 className="flex ms-24 mb-1 space-x-1 text-yellow-500">
            <IoIosStarOutline />
            <IoIosStarOutline />
            <IoIosStarOutline />
            <IoIosStarOutline />
            <IoIosStarOutline />
          </h1>
          <h3 className="font-bold text-2xl">{name}</h3>
          <p className="font-semibold text-xl text-[#FF3811]">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;

Product.propTypes = {
  product: PropTypes.object,
};
