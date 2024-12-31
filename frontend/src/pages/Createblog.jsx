import React, { useState } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { createBlog, uploadFile } from '../api/Api';


const Createblog = () => {
    

    const blankBlog = {
        "title":"",
        "image":"",
        "post":"<p><br></p>",
        "category":""
    }
   
    const [newBlog,setNewBlog] = useState(blankBlog)

    

    const menu = [
        {text:'Nature',path:'/'},
        {text:'Travel',path:'/'},
        {text:'Sports',path:'/'},
        {text:'Food',path:'/'},
    ]

    const handleUpload = async(e) =>{
        let uploadedFile = await uploadFile(e.target.files[0])
        if(uploadedFile.path){
            setNewBlog({...newBlog,image:uploadedFile.path})

        }
    }
    const handleSubmit = async() =>{
        let createdBlog = await createBlog(newBlog);
        if(createdBlog.success){
            setNewBlog(blankBlog);
            alert("Blog Added Successfully");

        }

    }
    return (
        <div className='flex w-full items-center justify-center'>
            <div className="bg-slate-200 w-[60%] p-5 rounded-xl" style={{boxShadow:"3px 3px 2px black"}}>
                
                <h1 className='text-2xl mb-5 text-blue-600'>Write Your Thoughts 👀</h1>
                <div className="flex flex-col">
                    
                    <label htmlFor="" className='ml-1 text-gray-500'>Title</label>
                    <input type="text" value={newBlog.title} onChange={(e)=>setNewBlog({...newBlog,title:e.target.value})} className='h-10 border border-gray-300 rounded my-2 p-2' />
                    <label htmlFor="" className='ml-1 text-gray-500'>Category</label>
                    <select value={newBlog.category} onChange={(e)=>setNewBlog({...newBlog,category:e.target.value})} name="" id="" className='h-10 border border-gray-300 rounded my-2 p-2'>
                        <option value="" default disabled>Select Category</option>                      
                        {menu.map(x => {
                            return <option value={x.text}>{x.text}</option>
                        })}
                    </select>
                    <label htmlFor="" className='ml-1 text-gray-500'>Image</label>
                    <input onChange={(e)=> handleUpload(e)} type="file" className='  border-gray-300 rounded my-2 p-2' />
                    <label htmlFor="" className='ml-1 text-gray-500'>Post</label>
                    <ReactQuill className='bg-white rounded mb-2 mt-2 editingarea' theme="snow" value={newBlog.post} onChange={(e)=>{setNewBlog({...newBlog,post:e})}} />

                    <hr />
                    <button onClick={()=>handleSubmit()}  className='bg-slate-500 text-white h-8 w-[100px] mt-2 rounded'>Submit</button>

                </div>
            </div>
        </div>
    );
}

export default Createblog;