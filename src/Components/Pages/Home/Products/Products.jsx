import { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
  return (
    <div className="my-12">
      <div className="text-center space-y-5">
        <h3 className="font-bold text-2xl text-[#FF3811]">Popular Products</h3>
        <h2 className="text-5xl font-bold">Browse Our Products</h2>
        <p>
          The majority have suffered alteration in some form, by injected
          Humour, or Randomised <br /> Words which do not look even slightly
          believable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map(product => (
            <Product product={product} key={product.id}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
