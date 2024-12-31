import { DataTypes } from "sequelize";

export const createBlogModel = async(sequelize)=>{
   const Blog = await sequelize.define("Blog",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        unique:true,
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    image:{
        type:DataTypes.STRING,
        
    },
    post:{
        type:DataTypes.TEXT
    },
    category:{
        type:DataTypes.STRING
    }

   })
   return Blog
}