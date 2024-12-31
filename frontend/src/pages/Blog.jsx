import React, { useEffect, useState } from 'react'
import { getBlogbyid } from '../api/Api'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser' 
import dateFormat from 'dateformat'

const Blog = () => {
  const apiURL = "http://localhost:5000/"
  const {id} = useParams();
  const [blogs,setBlogs] = useState(null);

  useEffect(()=>{
    async function fetchData(){
      const getBlog = await getBlogbyid(id)
      console.log(getBlog)
      setBlogs(getBlog)
    }
    fetchData()

  },[])



  return (
    <div className='flex justify-center items-center'>
       {blogs &&  <div className='flex flex-col w-[60%] overflow-hidden'>
            <h1 className='mt-1 text-3xl font-extrabold'>{blogs.title}</h1>
            <div>
                <small className='flex mt-4 mb-4'>{dateFormat(blogs.createdon,"mmmm dS, yyyy, h:MM TT")}</small>
            </div>
            <img className='rounded-lg' src={apiURL+blogs.image} alt=''/>
            <div className='mt-3'>
              {
                parse(blogs.post)
              }
         
            </div>

        </div>}
    </div>
  )
}

export default Blog