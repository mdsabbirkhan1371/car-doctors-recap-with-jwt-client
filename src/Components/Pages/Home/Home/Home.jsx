import About from '../About/About';
import Banner from '../Banner/Banner';
import Inquery from '../Inquery/Inquery';
import Products from '../Products/Products';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Inquery></Inquery>
      <Products></Products>
    </div>
  );
};

export default Home;
