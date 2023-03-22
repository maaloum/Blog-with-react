import React,{useState} from 'react'
import './NewBlog.css'
import { useNavigate  } from "react-router-dom";

export default function NewBlog() {
  const[title, setTitle]=useState('')
  const[body, setBody] = useState('')
  const[auther, setAuthor] = useState('')
  const history = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = {title, body, auther}
    fetch('http://localhost:3001/blogs', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    })
    setTitle('')
    setBody('')
    setAuthor('')
    history('/')
  }

  return (
    <div className='newBlog'>
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} name= 'title' required/>
        <label>Blog Body:</label>
        <textarea required name='body' value={body} onChange={(e)=> setBody(e.target.value)}></textarea>
        <label>Blog Author:</label>
        <input type='text' required name='author' value={auther} onChange={(e) => setAuthor(e.target.value)}/>
        <button >Add Blog</button>
      </form>
    </div>
  )
}
