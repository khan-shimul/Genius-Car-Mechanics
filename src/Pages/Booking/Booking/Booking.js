import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const [service, setService] = useState({});
    const { name, img } = service;
    const { serviceId } = useParams();

    useEffect(() => {
        fetch(`https://sleepy-springs-36602.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div>
            <h2>Details of: {name}</h2>
            <img src={img} alt="" />
            <h5>this is booking for {serviceId}</h5>
        </div>
    );
};

export default Booking;