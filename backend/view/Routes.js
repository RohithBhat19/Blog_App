import express from "express";
import multer from "multer";

import { getAllBlogs,addBlogs,uploadImage,getBlogsById, deleteBlog } from "../controller/blogController.js";
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}.${file.originalname}`)
    }
  });  
const upload = multer({ storage: storage })

router.get("/blogs/:cat",getAllBlogs)
router.get("/blogbyid/:id",getBlogsById)
router.post('/addBlogs',addBlogs)
router.post("/blogimage",upload.single('file'),uploadImage)
router.delete("/deleteblog/:id",deleteBlog)

export default router;