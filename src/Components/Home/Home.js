import React, {useState} from 'react'
import BlogList from '../Blog/BlogList'
import'./Home.css'

export default function Home() {
  const [blogs, setBlog]= useState([
    {
      title: 'My first blog',
      body: 'lorem ipsum...',
      id: 1},
    {
      title: 'My second blog',
      body: 'lorem ipsum...',
      id: 2},
    {
      title: 'My third blog',
      body: 'lorem ipsum...',
      id: 3},

  ])
  const handleDeletBlog = (blog) =>{
    const newBlog = blogs.filter((b) => b.id !== blog.id)
    setBlog(newBlog)
  }
  return (
    <div className='home'>
     <BlogList blogs ={blogs} handleDeletBlog= {handleDeletBlog}/>
    </div>
  )
}
