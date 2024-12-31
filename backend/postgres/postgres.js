import {Sequelize} from "sequelize";
import { createBlogModel } from "../model/blogSchema.js";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,{
    host:process.env.DB_HOST,
    dialect:process.env.DB_DIALECT,
})
let blogModel = null;
 const connection = async() =>{
    try {
        await sequelize.authenticate();
        console.log("Connection Successfull")
        blogModel = await createBlogModel(sequelize)
        
        await sequelize.sync()
        
    } catch (error) {
        console.log(error,"Connection Failed")
        
    }
}
export {connection,blogModel}