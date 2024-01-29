import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Blogs = ({ blog, onDelete, onCheckboxChange }) => {
    const { id, title, body } = blog;
    const navigate = useNavigate();

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxClick = () => {
        setIsChecked(prevChecked => !prevChecked);
        onCheckboxChange();
    };

    const handleDetailsClick = () => {
        navigate(`/viewblog/${id}`, { state: { blog } });
    };

    const handleDeleteClick = () => {
        fetch(`http://localhost:3001/blogs/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    onDelete(id);
                } else {
                    console.error('Failed to delete blog');
                }
            });
    };

    return (
        <div>
            <div className="card w-full bg-pink-600 text-white">
                <div className="card-body">
                    <h2 className="card-title text-3xl mb-2">{title}</h2>
                    <p>{body}</p>
                    <div className="card-actions flex justify-between mt-2">
                        <button className="btn mt-3" onClick={handleDetailsClick}>
                            Details
                        </button>
                        <button className="btn mt-3" onClick={handleDeleteClick}>
                            Delete
                        </button>
                    </div>
                    <div className="absolute top-0 right-0 p-2">
                        <input type="checkbox" checked={isChecked} onChange={handleCheckboxClick} className="checkbox" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
