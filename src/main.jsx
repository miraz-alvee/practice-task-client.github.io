import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Home from './components/Home/Home';
import ViewBlog from './components/ViewBlog/ViewBlog';
import Favorite from './shared/Favorite/Favorite';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/viewblog/:id",
    element: <ViewBlog></ViewBlog>
  },
  {
    path: "favorites",
    element: <Favorite></Favorite>
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-screen-2xl mx-auto mt-5'>
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>,
  </div>
)
