import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Checkout = () => {
  const service = useLoaderData();
  const { title, _id, price } = service;
  const { user } = useContext(AuthContext);
  const handleOrder = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phoneNumber.value;
    const date = form.date.value;
    const order = {
      customerName: name,
      email,
      date,
      phoneNumber: phone,
      price: price,
      service: _id,
    };

    console.log(order);
  };
  return (
    <div>
      <h3 className="text-2xl font-bold text-center">
        Book service now : {title}
      </h3>
      <div>
        <form onSubmit={handleOrder} className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user.email}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-block btn-primary"
              type="submit"
              value="Order Confirm Now"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
