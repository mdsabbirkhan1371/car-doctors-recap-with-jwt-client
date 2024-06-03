import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import BookingsRow from './BookingsRow';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const Bookings = () => {
  const { user } = useContext(AuthContext);

  const [myBookings, setMyBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user.email}`;
  useEffect(() => {
    // axios.get(url, { withCredentials: true }).then(res => {
    //   console.log(res.data);
    //   setMyBookings(res.data);
    // });
    fetch(url, { credentials: 'include' })
      .then(res => res.json())
      .then(data => {
        setMyBookings(data);
      });
  }, [url]);

  // delete booking
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

  // update booking

  const handleBookingConfirm = id => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ status: 'confirm' }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = myBookings.filter(booking => booking._id !== id);
          const updated = myBookings.find(booking => booking._id === id);

          updated.status = 'confirm';

          const newBooking = [updated, ...remaining];
          setMyBookings(newBooking);
        }
      });
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
                handleBookingConfirm={handleBookingConfirm}
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
