import axios from "axios";

const apiURL = "http://localhost:5000/api";

export const getBlogs = (cat) =>{
    if(!cat){
        cat = 'all';
    }
    return axios.get(apiURL+'/blogs/'+cat)
    .then(result => {
        return result.data
    })
    .catch(error =>{
        return error
    })

}

export const getBlogbyid = (id) => {
   
    return axios.get(apiURL+'/blogbyid/'+id)
    .then(result => {
        return result.data
    })
    .catch(error => {
        return error
    });
}

export const createBlog = (data) =>{

    return axios.post(apiURL+'/addBlogs',data)
    .then(result => {
        return result.data
    })
    .catch(error =>{
        return error
    })
}

export const uploadFile = (file) => {
    const formData = new FormData();
    formData.append('file',file);
    const config = {
        headers:{
            'content-type':'multipart/form-data'
        }
    }
    return axios.post(apiURL+'/blogimage',formData,config)
    .then(result => {
        return result.data
    })
    .catch(error =>{
        return error
    })

}

export const deleteBlog = (id) =>{
    return axios.delete(apiURL+'/deleteblog/'+id)
    .then(result =>{
        return result.data
    })
    .catch(error =>{
        return error
    })
}

