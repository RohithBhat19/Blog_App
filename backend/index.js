import express from "express";
import { connection } from "./postgres/postgres.js";
import blogRoutes from "./view/Routes.js"
import cors from "cors";


const app = express();
app.use(cors())
app.use('/uploads',express.static('uploads'))

app.use(express.json())
const port = 5000;


app.use("/api",blogRoutes)

app.get("/",(req,res)=>{
    res.send("Hello World")
})



app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})

connection()