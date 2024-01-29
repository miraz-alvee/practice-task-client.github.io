import React, { useState, useEffect } from 'react';
import Blogs from '../Blogs/Blogs';
import NavBar from '../../shared/NavBar/NavBar';


const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [checkedCount, setCheckedCount] = useState(0);

  const handleCheckboxChange = () => {
    setCheckedCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    fetch("http://localhost:3001/blogs")
      .then(res => res.json())
      .then(data => setBlogs(data));

  }, []);

  const handleAddBlog = e => {
    e.preventDefault();
    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const body = form.body.value;
    const user = { id, title, body };
    console.log(user);
    fetch('http://localhost:3001/blogs', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log('inside post response', data);
        const newBlogs = [...blogs, data];
        setBlogs(newBlogs);
        localStorage.setItem('blogs', JSON.stringify(newBlogs));
        form.reset;
      })
  };

  const handleDeleteBlog = (deletedBlogId) => {
    const updatedBlogs = blogs.filter(blog => blog.id !== deletedBlogId);
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
  };

  return (
    <>
      <NavBar checkedCount={checkedCount}></NavBar>
      <form onSubmit={handleAddBlog} className="max-w-md mx-auto p-6 bg-gray-500 rounded-md shadow-md mt-10">
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


      <div className='grid md:grid-cols-3 gap-20 mt-10'>
        {
          blogs.map(blog => {
            return (<Blogs key={blog.id} blog={blog} onDelete={handleDeleteBlog} onCheckboxChange={handleCheckboxChange}
               ></Blogs>)
          })
        }

      </div>
    </>
  );


};

export default Home;
