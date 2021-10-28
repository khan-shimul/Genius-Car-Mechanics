import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.post('https://sleepy-springs-36602.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully')
                    reset()
                }
            })

    };
    return (
        <div className="add-service">
            <h2>Please Add a Service</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Image Url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;