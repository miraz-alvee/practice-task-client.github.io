import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const ViewBlog = () => {
    const { id } = useParams();
    const { state } = useLocation();
    const blog = state && state.blog;

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/comments`)
            .then((res) => res.json())
            .then((data) => setComments(data));
    }, []);

    const blogComments = comments.filter(comment => comment.blogId === blog.id);

    return (
        <div>
            <div className="card w-full bg-purple-500 text-white">
                <div className="card-body">
                    <h2 className="card-title text-3xl mb-2">ViewBlog Component for Blog ID: {id}</h2>
                    <h2 className="card-title text-2xl mb-2">Title: {blog.title}</h2>
                    <h2 className="card-title text-2xl mb-2">{blog.body}</h2>
                    <p></p>

                </div>
            </div>

            <div className='mt-10'>
                {/* {comments.map((comment) => comment.blogId == blog.id(
                        <div key={comment.id}>
                            <p>{comment.name}</p>
                            <p>{comment.email}</p>
                            <p>{comment.body}</p>
                            
                        </div>
                    ))} */}
                {
                    blogComments.map(blogComment => {
                        return (<Comments key={id} blogComment={blogComment}></Comments>)
                    })
                }
            </div>

        </div>
    );
};

export default ViewBlog;
