import React, {useState, useEffect} from 'react'
import BlogList from '../Blog/BlogList'
import'./Home.css'

export default function Home() {
  const [blogs, setBlog]= useState( null)
  const[isLoading, setisLoading] = useState(true)
  const[messageError, setMessageError] =useState('')
  useEffect((blog) => {
    setTimeout(()=> {
      fetch('http://localhost:8000/blogs')
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
        console.log(error.message)
        setMessageError(error.message)
        setisLoading(false)

      })
    }, 500)
  }, [])
  return (
    <div className='home'>
      {isLoading && <p>Loading ...</p>}
      {messageError && <p>{messageError}</p>}
     {blogs && <BlogList blogs ={blogs}/>}
    </div>
  )
}
