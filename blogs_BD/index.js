

const express= require("express");
const app=express();

require("dotenv").config();
const PORT=process.env.PORT || 4000;

app.use(express.json());

const blog=require("./routes/blog")

// mounting
app.use("/api/v1", blog);

const connectWithDB=require("./config/database");
connectWithDB();

app.listen(3000,()=>{
  console.log(`App is running ${PORT}`);
})

app.get("/",(req, res)=>{
  res.send(`<h1>This is BACKEND DEVELOPMENT</h1>`)
})
