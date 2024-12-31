import React from 'react'
import { Link } from 'react-router-dom';
import { IoApps } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { deleteBlog } from '../api/Api';

const Blogcard = (props) => {
  const {blogdata,onDelete} = props;
  const apiURL = 'http://localhost:5000/'
  console.log(blogdata)
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      const response = await deleteBlog(blogdata.id); 
      if (response.success) {
       
        onDelete(blogdata.id); 
      } else {
        alert("Failed to delete the blog");
      }
    }
  };
  return (
    <div className='bg-white shadow-md overflow-hidden rounded-xl'>
     <Link to={`/blog/${blogdata.id}`}>
      <div className='flex flex-col w-full'>
       
        <div className="w-full h-[250px] relative">
  <img 
    src={`${apiURL}${blogdata.image}`} 
    alt={blogdata.title} 
    className="absolute w-full h-full object-cover"
  />
</div>



        <div className='p-2'>
          <h5 className='mt-1  text-left'>{blogdata.title}</h5>
          <p className=' opacity-70 flex justify-start items-center'>
          <IoApps />
            <span className='text-sm text-left ml-2'>{blogdata.category}</span></p>
            <button style={{ float:"right"}}
                onClick={(e) => {
                  e.preventDefault(); 
                   handleDelete();
                }} 
                className="text-red-500 hover:text-red-700"
              >
                <MdDelete size={20}/>
              </button>
        </div>

      </div>
      </Link>
      
    </div>
  )
}

export default Blogcard