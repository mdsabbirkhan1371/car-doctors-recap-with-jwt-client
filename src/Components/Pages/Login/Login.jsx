import { useContext } from 'react';
import login from '../../../assets/images/login/login.svg';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = async event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // sign in with email and password
    try {
      const res = await signIn(email, password);
      console.log(res, 'User is here...');
      if (res.user) {
        navigate(location?.state ? location?.state : '/');
      }
    } catch (err) {
      console.error(err);
    }
    // .then(res => {
    //   console.log(res.user);
    //   if (res.user) {
    //     navigate(location?.state ? location?.state : '/');
    //   }
    // })
    // .catch(error => {
    //   console.error(error);
    // });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <img className="p-5  mt-20" src={login} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm border p-5 shadow-2xl bg-base-100">
          <h1 className="text-3xl mt-5 font-bold text-center">Login!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="p-3 rounded-xl  bg-[#FF3811]"
                type="submit"
                value="Sign In"
              />
            </div>
          </form>
          <div>
            <h2 className="text-center">Or Sign In With</h2>
            <div className="text-center rounded-full text-2xl">
              <button className="mr-3">
                <FaFacebook />
              </button>
              <button>
                <FcGoogle />
              </button>
              <button className="m-3">
                <RiLinkedinBoxFill />
              </button>
            </div>
            <h2 className="text-center">
              New here?
              <Link to="/signUp" className="text-[#FF3811] ml-2">
                Sign Up
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
