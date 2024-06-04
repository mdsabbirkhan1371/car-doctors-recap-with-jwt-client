import axios from 'axios';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
  baseURL:
    'https://car-doctors-server-site-13mxhwo1c-md-sabbir-khans-projects.vercel.app',
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    axios.interceptors.response.use(res => {
      return res;
    }),
      error => {
        console.log('interceptor error', error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log('logout user');
          logOut()
            .then(() => {
              navigate('/login');
            })
            .catch(err => {
              console.log(err.message);
            });
        }
      };
  }, []);
  return axiosSecure;
};

export default useAxiosSecure;
