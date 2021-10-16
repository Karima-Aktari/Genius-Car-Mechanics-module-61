import React from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h1>This is bookings {serviceId}</h1>
        </div>
    );
};

export default Booking;