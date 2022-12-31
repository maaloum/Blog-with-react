import React from 'react'

export default function BlogList({blogs, handleDeletBlog}) {
  return (
    <>
       {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by Maaloum</p>
          <div className='blog-body'>{blog.body}</div>
          <button className='deleteBlog' onClick={() => {handleDeletBlog(blog)}}>Delete Blog</button>
        </div>))}
    </>
  )
}
