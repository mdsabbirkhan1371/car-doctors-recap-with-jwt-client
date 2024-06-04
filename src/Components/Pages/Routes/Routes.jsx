import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Home from '../Home/Home/Home';
import About from '../Home/About/About';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import Services from '../Home/Services/Services';
import BookingService from '../BookingService/BookingService';
import Bookings from '../Bookings/Bookings';
import PrivateRoute from './PrivateRoute';

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
        element: (
          <PrivateRoute>
            <BookingService></BookingService>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://car-doctors-server-site-13mxhwo1c-md-sabbir-khans-projects.vercel.app/services/${params.id}`
          ),
      },
      {
        path: 'myBookings',
        element: (
          <PrivateRoute>
            <Bookings></Bookings>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
