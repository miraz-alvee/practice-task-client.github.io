import React, { useState, useEffect } from 'react';
import Blogs from '../Blogs/Blogs';
import NavBar from '../../shared/NavBar/NavBar';

// //import axios from 'axios';
// import Blogs from "./components/Blogs/Blogs";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then(res => res.json())
      .then(data => setBlogs(data));

  }, []);

  return (
    <>
      <NavBar></NavBar>
      
      <div className='grid md:grid-cols-3 gap-20 mt-10'>
        {
          blogs.map(blog => {
            return (<Blogs key={blog.id} blog={blog}></Blogs>)
          })
        }

      </div>
    </>
  );


};

export default Home;
