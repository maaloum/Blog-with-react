import React, {useState, useEffect} from 'react'
import BlogList from '../Blog/BlogList'
import'./Home.css'

export default function Home() {
  const [blogs, setBlog]= useState( null)
  const[isLoading, setisLoading] = useState(true)
  const[messageError, setMessageError] =useState('')
  const[btnClear, setBtnClear] = useState('');
  useEffect((blog) => {
    setTimeout(()=> {
      fetch('http://localhost:3001/blogs')
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

  const handleClearAll = () => {
      
if(window.confirm("Are you sure you want to delet all?")){ 
        setBlog([])
        setBtnClear('btnClear')}
      
  }
  return (
    <div className='home'>
      {isLoading && <p className='loading'> Loading ...</p>}
      {messageError && <p>{messageError}</p>}
     {blogs && <BlogList blogs ={blogs}/>}
     {!isLoading && <button onClick={handleClearAll} className ={btnClear}>Delete All blogs</button>}
    </div>
  )
}
