const Product = ({ product }) => {
  const { name, price, img } = product;

  return (
    <div className="card w-96 shadow-xl p-5 border border-orange-950	mt-5 ">
      <figure>
        <img className="h-32" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h3 className="font-bold text-2xl">{name}</h3>
        <p className="font-semibold text-xl text-[#FF3811]">${price}</p>
      </div>
    </div>
  );
};

export default Product;
