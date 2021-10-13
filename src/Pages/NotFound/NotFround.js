import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.jpg'

const NotFround = () => {
    return (
        <div>
            <img src={notfound} alt="" />
            <br />
            <Link to="/">
                <button className="btn btn-primary mb-3">Back Home</button>
            </Link>
        </div>
    );
};

export default NotFround;