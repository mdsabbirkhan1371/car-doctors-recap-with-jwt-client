import { useContext } from 'react';
import login from '../../../assets/images/login/login.svg';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ name, email, password });

    // create user with email and password

    createUser(email, password)
      .then(res => {
        console.log(res.user);
      })
      .catch(error => {
        console.error(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <img className="p-5  mt-20" src={login} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm border p-5 shadow-2xl bg-base-100">
          <h1 className="text-3xl mt-5 font-bold text-center">SignUp!</h1>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
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
                value="Sign Up"
              />
            </div>
          </form>
          <div>
            <h2 className="text-center">Or Sign Up With</h2>
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
              Already Have An Account?
              <Link to="/login" className="text-[#FF3811] ml-2">
                Login
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
