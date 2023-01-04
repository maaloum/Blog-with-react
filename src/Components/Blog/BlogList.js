import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogList({blogs}) {
  return (
    <>
       {blogs.length >= 1 && blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <Link to= {`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by : {blog.auther}</p>
            <div className='blog-body'>{blog.body}</div>
            </Link>

        </div>))}
        {
          blogs.length === 0 && <div className='empty'> <h2>No blogs</h2></div>
        }
    </>
  )
}
