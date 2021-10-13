import React from 'react';
import { Col } from 'react-bootstrap';
import './Expert.css'

const Expert = ({ expert }) => {
    const { name, img, expertize } = expert;
    return (
        // className="col-lg-4 col-md-4 col-sm-6 col-12 expert"
        <Col xs={12} sm={6} md={4} lg={4} className="expert">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5 className="text-danger">{expertize}</h5>
        </Col>
    );
};

export default Expert;