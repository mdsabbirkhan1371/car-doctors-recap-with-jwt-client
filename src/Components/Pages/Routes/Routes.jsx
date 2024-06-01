import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Home from '../Home/Home/Home';
import About from '../Home/About/About';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import Services from '../Home/Services/Services';
import Checkout from '../Checkout/Checkout';
import BookingService from '../BookingService/BookingService';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>,
      },
      {
        path: '/services',
        element: <Services></Services>,
      },
      {
        path: '/booking/:id',
        element: <BookingService></BookingService>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: '/checkout/:id',
        element: <Checkout></Checkout>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
]);

export default router;
