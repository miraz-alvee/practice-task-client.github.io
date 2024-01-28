import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blogs = ({ blog }) => {

    const { userId, id, title, body } = blog;


    const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/viewblog/${id}`,{ state: { blog } });
  };

    return (
        <div>
            <div className="card w-full bg-pink-600 text-white">
                <div className="card-body">
                    <h2 className="card-title text-3xl mb-2">{title}</h2>
                    <p>{body}</p>
                    <div className="card-actions justify-end">
                        <button className="btn" onClick={handleDetailsClick}>
                            Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Blogs;
