import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://sleepy-springs-36602.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleServiceDelete = id => {
        const proceed = window.confirm('Are you sure want to delete?');
        if (proceed) {
            const url = `https://sleepy-springs-36602.herokuapp.com/services/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remainingServices = services.filter(service => service._id !== id);
                        setServices(remainingServices)
                    }
                })
        }
    }

    return (
        <div>
            <h2>Manage Services</h2>

            {
                services.map(service => <div key={service._id}>
                    <h3>{service.name}</h3>
                    <button onClick={() => handleServiceDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;