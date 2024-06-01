import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

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
  return (
    <div>
      <h1 className="text-center text-2xl">My Bookings:{myBookings.length}</h1>
    </div>
  );
};

export default Bookings;
