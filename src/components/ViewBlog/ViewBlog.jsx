import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const ViewBlog = () => {
    const { id } = useParams();
    const { state } = useLocation();
    const blog = state && state.blog;

    const [comments, setComments] = useState([]);
    console.log(comments)

    const blogComments = comments.filter(comment => comment.blogId === blog.id);
    
    useEffect(() => {
        fetch(`http://localhost:3001/comments`)
          .then((res) => res.json())
          .then((data) => { setComments(data);
            localStorage.setItem('comments', JSON.stringify(data));
          });
      }, []);

    return (
        <div>
            <form className="max-w-md mx-auto p-6 bg-gray-500 rounded-md shadow-md mt-10">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
            Id
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="id"
            name="id"
            id="id"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="title"
            id="title"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="body">
            Body
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="body"
            id="body"
            required
          />
        </div>
        <div>
          <button
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600"
            type="submit"
          >
            Add Blogs
          </button>
        </div>
      </form>
            <div className="card w-full bg-purple-500 text-white">
                <div className="card-body">
                    <h2 className="card-title text-3xl mb-2">ViewBlog Component for Blog ID: {id}</h2>
                    <h2 className="card-title text-2xl mb-2">Title: {blog.title}</h2>
                    <h2 className="card-title text-2xl mb-2">{blog.body}</h2>
                    <p></p>

                </div>
            </div>

            <div className='mt-10'>
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
