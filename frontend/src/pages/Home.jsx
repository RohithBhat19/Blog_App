import React, { useEffect, useState } from 'react'
import Blogcard from '../components/Blogcard'
import { getBlogs } from '../api/Api'
import { useSearchParams } from 'react-router-dom'
const Home = () => {
  const [blogs,setBlogs] = useState(null);
  let [searchParams,setSearchParams] = useSearchParams()
  
  
  

  useEffect(()=>{
    async function fetchData(){
      const allBlogs = await getBlogs();
      console.log("All",allBlogs)
      setBlogs(allBlogs)

    }
    fetchData()
   

  },[])
  useEffect(()=>{
    async function fetchData(){
      const allBlogs = await getBlogs(searchParams.get('category'))
      setBlogs(allBlogs);
    }
    fetchData()

  },[searchParams])

  const handleDelete = (id) =>{
    setBlogs(blogs.filter(blog => blog.id!==id))
  }

  const data = [
    {
      title:"Is it worth investing on real estate ? Advantages and disadvantages",
      image:"https://picsum.photos/id/200/300/200",
      description:"Lorem epsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has been...",
      createdon:"12 Dec, 2024",
      comments:"0"

    },
    {
      title:"Is it worth investing on real estate ? Advantages and disadvantages",
      image:"https://picsum.photos/id/208/300/200",
      description:"Lorem epsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has been...",
      createdon:"12 Dec, 2024",
      comments:"0"

    },{
      title:"Is it worth investing on real estate ? Advantages and disadvantages",
      image:"https://picsum.photos/id/218/300/200",
      description:"Lorem epsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has been...",
      createdon:"12 Dec, 2024",
      comments:"0"

    },{
      title:"Is it worth investing on real estate ? Advantages and disadvantages",
      image:"https://picsum.photos/id/206/300/200",
      description:"Lorem epsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has been...",
      createdon:"12 Dec, 2024",
      comments:"0"

    },{
      title:"Is it worth investing on real estate ? Advantages and disadvantages",
      image:"https://picsum.photos/id/225/300/200",
      description:"Lorem epsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has been...",
      createdon:"12 Dec, 2024",
      comments:"0"

    },{
      title:"Is it worth investing on real estate ? Advantages and disadvantages",
      image:"https://picsum.photos/id/204/300/200",
      description:"Lorem epsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has been...",
      createdon:"12 Dec, 2024",
      comments:"0"

    },{
      title:"Is it worth investing on real estate ? Advantages and disadvantages",
      image:"https://picsum.photos/id/203/300/200",
      description:"Lorem epsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has been...",
      createdon:"12 Dec, 2024",
      comments:"0"

    },{
      title:"Is it worth investing on real estate ? Advantages and disadvantages",
      image:"https://picsum.photos/id/202/300/200",
      description:"Lorem epsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has been...",
      createdon:"12 Dec, 2024",
      comments:"0"

    },{
      title:"Is it worth investing on real estate ? Advantages and disadvantages",
      image:"https://picsum.photos/id/201/300/200",
      description:"Lorem epsum is simply dummy text of the printing and typesetting industry.Lorem ipsum has been...",
      createdon:"12 Dec, 2024",
      comments:"0"

    },

  ]
  return (
    <div>
   
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
          {
            blogs && blogs.map((x,index) =>{
              return <Blogcard key = {index} blogdata = {x} onDelete={handleDelete}/>
            })
          }
            
        </div>
    </div>
  )
}

export default Home