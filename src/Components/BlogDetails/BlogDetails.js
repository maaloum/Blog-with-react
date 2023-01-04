import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router'
import './BlogDetails.css'

function BlogDetails() {
  const {id} = useParams()
  const [blogs, setBlog]= useState( null)
  const[isLoading, setisLoading] = useState(true)
  const[messageError, setMessageError] =useState('')
  const navigate = useNavigate()
  useEffect((blog) => {
    setTimeout(()=> {
      fetch('http://localhost:8000/blogs/' + id)
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
  }, [])

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blogs.id, {
      method: 'DELETE'
    })
    navigate('/')
  }



  return (
    <div className='blog-details'>
      {isLoading && <p>Loading ...</p>}
      {messageError && <p>{messageError}</p>}
      {blogs && (
        <article>
          <h2>{blogs.title}</h2>
          <p>Written by : {blogs.auther}</p>
          <div className='blog-body'>{blogs.body}</div>
          <button className='deleteBlog' onClick={handleClick}>Delete Blog</button>
        </article>
      )}
    </div>
  )
}

export default BlogDetails
