import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router'
import './BlogDetails.css'

function BlogDetails() {
  const {id} = useParams()
  console.log(id)
  const [blogs, setBlog]= useState( null)
  const[isLoading, setisLoading] = useState(true)
  const[messageError, setMessageError] =useState('')
  const navigate = useNavigate()
  useEffect((blog) => {
    setTimeout(()=> {
      fetch('http://localhost:3001/blogs/' + id)
      .then(res => {
        if(!res.ok){
          throw Error('We could not fetch the data for that resource!')
        }
        return res.json()
      })
      .then(data =>
        {setBlog(data)
        setisLoading(false)
      })
      .catch(error => {
        setMessageError(error.message)
        setisLoading(false)

      })
    }, 500)
  }, [id])

  const handleClick = () => {
    console.log(id)
    if(window.confirm("Do you want to detele this post")){
    fetch('http://localhost:3001/blogs/' + id, 
      {method: "DELETE"}).then(() =>{
        console.log('blog deleted')
        
      }).catch(error => {
        console.log(error.message)
      })
    
    navigate('/')
  }}

  const handleEdit = () => {
    navigate('/edit/' + id)
  }


  return (
    <div className='blog-details'>
      {isLoading && <p className='loading'>Loading ...</p>}
      {messageError && <p>{messageError}</p>}
      {blogs && (
        <article>
          <h2>{blogs.title}</h2>
          <p>Written by : {blogs.auther}</p>
          <div className='blog-body'>{blogs.body}</div>
          <button className='deleteBlog' onClick={handleClick}>Delete Blog</button>
          <button className='editBlog' onClick={handleEdit}>Edit Blog</button>
        </article>
      )}
    </div>
  )
}

export default BlogDetails
