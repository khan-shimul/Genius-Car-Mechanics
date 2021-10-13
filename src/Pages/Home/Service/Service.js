import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Service.css'

const Service = ({ service }) => {
    // const { name } = props.service;
    const { id, name, price, description, img } = service;
    return (
        <div className="service pb-4">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: ${price}</h5>
            <p className="px-3">{description.slice(0, 165)}</p>
            <Link to={`/booking/${id}`}>
                <Button variant="warning">Book {name}</Button>
            </Link>
        </div>
    );
};

export default Service;