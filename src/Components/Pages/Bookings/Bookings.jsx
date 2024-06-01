import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import BookingsRow from './BookingsRow';
import { ToastContainer, toast } from 'react-toastify';

const Bookings = () => {
  const { user } = useContext(AuthContext);

  const [myBookings, setMyBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMyBookings(data);
      });
  }, []);

  const handleDelete = id => {
    const proceed = confirm('Are You Sure Want to Delete This?');
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast('Deleted Successful');
            const remaining = myBookings.filter(booking => booking._id !== id);
            setMyBookings(remaining);
          }
        });
    }
  };
  return (
    <div>
      <h1 className="text-center text-2xl">
        My Bookings : {myBookings.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>Delete</label>
              </th>
              <th>Image</th>
              <th>Service Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {myBookings.map(booking => (
              <BookingsRow
                handleDelete={handleDelete}
                key={booking._id}
                booking={booking}
              ></BookingsRow>
            ))}
          </tbody>
        </table>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Bookings;
