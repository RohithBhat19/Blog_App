import { blogModel } from "../postgres/postgres.js"
export const getAllBlogs = async (req, res) => {
  const { cat } = req.params;
  try {
    const blogs =
      cat && cat !== "all"
        ? await blogModel.findAll({ where: { category: cat } })
        : await blogModel.findAll();

   
    return res.status(200).json(blogs || []);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};


export const getBlogsById = async(req,res)=>{
  const {id} = req.params;
  try {
    const blog = await blogModel.findOne({where:{id}});
    if(!blog){
      return res.status(200).json({message:"No Blogs Found",blogs:[]})

    }
    return res.status(200).json(blog)
  } catch (error) {
    return res.status(500).json({error:"Internal Server Error"})
  }
}

export const addBlogs = async(req,res) => {
    const {title,image,post,category} = req.body;
    try {
        const blogs = await blogModel.create({title,image,post,category})
        return res.status(201).json({success:true,message:"Created Successfully",blogs})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:"Internal Server Error",success:false})
        
    }
}

export const uploadImage = (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }
  
     
      return res.status(200).json(
        
         req.file 
      );
  
    } catch (error) {
      console.error('Error while uploading image:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  export const deleteBlog = async(req,res)=>{
    const {id} = req.params;
    try {
      const blog = await blogModel.findByPk(id);
      if(!blog){
        return res.status(404).json({ success: false, message: "Blog not found" });
      }
      await blog.destroy();
      return res.status(200).json({ success: true, message: "Blog deleted successfully" });
      
    } catch (error) {
      return res.status(500).json({error:"Internal Server Error"})
      
    }
  }