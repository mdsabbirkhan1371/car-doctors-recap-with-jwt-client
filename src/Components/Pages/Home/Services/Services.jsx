import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);
  return (
    <div className="my-12">
      <div className="text-center space-y-5">
        <h3 className="font-bold text-2xl text-[#FF3811]">Service</h3>
        <h2 className="text-5xl font-bold">Our Service Area</h2>
        <p>
          The majority have suffered alteration in some form, by injected
          Humour, or Randomised <br /> Words which do not look even slightly
          believable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {services.map(service => (
          <ServiceCard service={service} key={service._id}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
